const fs = require('fs')
const limit = require('simple-rate-limiter')
const request = limit(require('request')).to(10).per(1000)
const cheerio = require('cheerio')
const pandoc = require('simple-pandoc')
const podaci = require('./data/karakteri.json')

const item = podaci[podaci.length-1];
const url = `http://www.tolkiengateway.net/wiki/${item.title}`
request(url, function(error, response, body) {
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
        item[kljuc] = item[kljuc] || vrednost
      }
    })
  }
  fs.writeFileSync('item.json', JSON.stringify(item, null, 2))
})

