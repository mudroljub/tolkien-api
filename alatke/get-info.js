const fs = require('fs')
const limit = require('simple-rate-limiter')
const request = limit(require('request')).to(5).per(1000)
const cheerio = require('cheerio')

const podaci = require('./data/spisi.json')
// const mapirano = require('./mapirano.json')
let mapirano = []
console.log(podaci.length)

let length = 200
length = length > podaci.length ? podaci.length : length
for (let i = 0; i < length; i++) {
  const item = podaci[i];
  const url = item.lotrUrl ? item.lotrUrl : `http://lotr.wikia.com/?curid=${item.page_id}`
  request(url, function(error, response, body) {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)
    const $ = cheerio.load(body)
    const infobox = $('.portable-infobox .pi-data')
    infobox.map((j, el) => {
      let kljuc = $(el).find('.pi-data-label').text().toLowerCase()
      const vrednost = $(el).find('.pi-data-value').html()
      if (kljuc) {
        kljuc = kljuc.split(' ').join('_')
        kljuc = kljuc.split('/').join('_or_')
        if (kljuc in item) kljuc = 'data_' + kljuc
        item[kljuc] = vrednost
      }
    })
    const nadjen = mapirano.find(x => x.title == item.title)
    if (!nadjen) 
      mapirano.push(item)
    if (i == length - 1) fs.writeFileSync('mapirano.json', JSON.stringify(mapirano, null, 2))
  })
}
