const limit = require('simple-rate-limiter')
const request = limit(require('request')).to(10).per(1000)
const cheerio = require('cheerio')

const bekap = require('./backup/stranice.json')
const prevediPaSacuvaj = require('./prevedi-jedan')

const found = bekap.find(x => x.title._text == "Fords of Isen")
console.log(!!found)

const item = {
  name: found.title._text,
  lotr_page_id: found.id._text,
  text: found.revision.text._text
}
const name = encodeURIComponent(item.name)
let brojac = 0

function proveriBrojac() {
  if (++brojac == 2) prevediPaSacuvaj(item)
}

request(`https://lotr.wikia.com/wiki/${name}`, function(err, res, body) {
  const $ = cheerio.load(body)
  const infobox = $('.portable-infobox .pi-data')
  infobox.each((j, el) => {
    let kljuc = $(el).find('.pi-data-label').text().toLowerCase()
    const vrednost = $(el).find('.pi-data-value').html()
    if (kljuc) {
      kljuc = kljuc.replace(/\s/g, "_")
      kljuc = kljuc.split('/').join('_or_')
      if (!item[kljuc]) item[kljuc] = vrednost
    }
  })
  proveriBrojac()
})

request(`http://www.tolkiengateway.net/wiki/${name}`, function(err, res, body) {
  const $ = cheerio.load(body)
  const table = $('table[style^="float"] tbody')
  if (table) {
    const redovi = $(table.html())
    redovi.each((i, red) => {
      const celije = $(red).find('td')
      if (celije.length == 2) {
        let kljuc = $(celije[0]).text().toLowerCase()
        kljuc = kljuc.replace(/\s/g, "_")
        const vrednost = $(celije[1]).html()
        item[kljuc] = item[kljuc] || vrednost
      }
    })
  }
  proveriBrojac()
})
