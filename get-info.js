const fs = require('fs')
const limit = require('simple-rate-limiter')
const request = limit(require('request')).to(10).per(1000)
const cheerio = require('cheerio')

const podaci = require('./data/ostalo.json')
const mapirano = require('./mapirano.json')
// let mapirano = []
console.log(podaci.length)

let length = 600
length = length > podaci.length ? podaci.length : length
for (let i = 400; i < length; i++) {
  const item = podaci[i];
  const url = `http://www.tolkiengateway.net/wiki/Thorin`
  request(url, function(error, response, body) {
    console.log(i, 'error:', error)
    const $ = cheerio.load(body)
    const table = $('table[style^="float"] tbody')
    if (table) {
      const redovi = $(table.html())
      redovi.map((i, red) => {
        const celije = $(red).find('td')
        if (celije.length == 2) {
          let kljuc = $(celije[0]).text().toLowerCase()
          kljuc = kljuc.split(' ').join('_')
          const vrednost = $(celije[1]).html()
          if (!kljuc in item)
            item[kljuc] = vrednost
        }
      })
    mapirano.push(item)
    }
    if (i == length - 1) fs.writeFileSync('mapirano.json', JSON.stringify(mapirano, null, 2))
  })
}
