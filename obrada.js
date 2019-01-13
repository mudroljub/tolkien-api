const fs = require('fs')
const limit = require('simple-rate-limiter')
const request = limit(require('request')).to(10).per(1000)
const cheerio = require('cheerio')

const ostalo = require('./ostalo.json')
const mapirano = require('./mapirano.json')

const length = 130
for (let i = 100; i < length; i++) {
  const item = ostalo[i];
  request(`http://lotr.wikia.com/?curid=${item.page_id}`, function(error, response, body) {
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
    if (!nadjen) mapirano.push(item)
    if (i == length - 1) fs.writeFileSync('mapirano.json', JSON.stringify(mapirano, null, 2))
  })
}
