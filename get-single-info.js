const fs = require('fs')
const limit = require('simple-rate-limiter')
const request = limit(require('request')).to(10).per(1000)
const cheerio = require('cheerio')
const item = require('./item.json')

const site = "tolkiengateway" // lotr or tolkiengateway

if (site == "lotr") {
  const url = `http://www.tolkiengateway.net/wiki/${encodeURIComponent(item.title)}`
  console.log(url)
  
  request(url, function(error, response, body) {
    const $ = cheerio.load(body)
    const table = $('table[style^="float"] tbody')
    if (table) {
      const redovi = $(table.html())
      redovi.map((i, red) => {
        const celije = $(red).find('td')
        if (celije.length == 2) {
          let kljuc = $(celije[0]).text().toLowerCase()
          kljuc = kljuc.replace(/\s/g, "_")
          const vrednost = $(celije[1]).html()
          item[kljuc] = item[kljuc] || vrednost
        }
      })
    }
    fs.writeFileSync('item.json', JSON.stringify(item, null, 2))
  })
}

if (site == "tolkiengateway") {
  const url = `https://lotr.wikia.com/wiki/${encodeURIComponent(item.title)}`
  console.log(url)
  
  request(url, function(error, response, body) {
    const $ = cheerio.load(body)
    const infobox = $('.portable-infobox .pi-data')
    infobox.map((j, el) => {
      let kljuc = $(el).find('.pi-data-label').text().toLowerCase()
      const vrednost = $(el).find('.pi-data-value').html()
      if (kljuc) {
        kljuc = kljuc.replace(/\s/g, "_")
        kljuc = kljuc.split('/').join('_or_')
        if (!item[kljuc]) item[kljuc] = vrednost
      }
    })
    fs.writeFileSync('item.json', JSON.stringify(item, null, 2))
  })
}

