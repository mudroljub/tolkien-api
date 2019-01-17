const fs = require('fs')
const limit = require('simple-rate-limiter')
const request = limit(require('request')).to(10).per(1000)
const cheerio = require('cheerio')
const prevediPaSacuvaj = require('./prevedi-jedan')

const bekap = require('./data/bekap/stranice-bekap.json')
// const item = require('./item.json')

const found = bekap.find(x => x.title._text == "Tar-Aldarion")
const item = {
  name: found.title._text,
  lotr_page_id: found.id._text,
  text: found.revision.text._text
}

const site = "lotr" // lotr or tolkiengateway
const article = encodeURIComponent(item.name)


if (site == "lotr") {
  const url = `https://lotr.wikia.com/wiki/${article}`
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
    prevediPaSacuvaj(item)
  })
}

if (site == "tolkiengateway") {
  const url = `http://www.tolkiengateway.net/wiki/${article}`
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
    prevediPaSacuvaj(item)
  })
}
