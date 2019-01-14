const fs = require('fs')
const limit = require('simple-rate-limiter')
const request = limit(require('request')).to(10).per(1000)
const cheerio = require('cheerio')
const pandoc = require('simple-pandoc')
const convert = pandoc('html', 'plain')

const podaci = require('./data/ostalo.json')
// const mapirano = require('./mapirano.json')
let mapirano = []
console.log(podaci.length)

let length = 300
length = length > podaci.length ? podaci.length : length
for (let i = 0; i < length; i++) {
  const item = podaci[i];
  const url = `http://www.tolkiengateway.net/wiki/${item.title}`
  request(url, function(error, response, body) {
    console.log(item.title, i, 'error:', error)
    const $ = cheerio.load(body)
    const table = $('table[style^="float"] tbody')
    if (table) {
      const redovi = $(table.html())
      redovi.map(async (i, red) => {
        const celije = $(red).find('td')
        if (celije.length == 2) {
          let kljuc = $(celije[0]).text().toLowerCase()
          kljuc = kljuc.split(' ').join('_')
          const vrednost = $(celije[1]).html()
          if (item.title == "Orcs") console.log(kljuc)
          console.log(!kljuc in item)
          item[kljuc] = item[kljuc] || await convert(vrednost)
          // if (!kljuc in item) {
          //   item[kljuc] = vrednost
          // }
        }
      })
    // const nadjeno = mapirano.find(m => m.title == item.title)
    // if (!nadjeno) mapirano.push(item)
    mapirano.push(item)
    }
    // console.log(mapirano)
    if (i == length - 1) fs.writeFileSync('mapirano.json', JSON.stringify(mapirano, null, 2))
  })
}

Promise.all(mapirano).then(ispunjeno => {
  fs.writeFileSync('mapirano.json', JSON.stringify(ispunjeno, null, 4))
})

