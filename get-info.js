const fs = require('fs')
const limit = require('simple-rate-limiter')
const request = limit(require('request')).to(5).per(1000)
const cheerio = require('cheerio')

const podaci = require('./data/ostalo.json')
// const mapirano = require('./mapirano.json')
let mapirano = []
console.log(podaci.length)

let length = 2000
length = length > podaci.length ? podaci.length : length
for (let i = 0; i < length; i++) {
  const item = podaci[i];
  const url = item.lotrUrl ? item.lotrUrl : `http://lotr.wikia.com/?curid=${item.page_id}`
  request(url, function(error, response, body) {
    console.log(i, 'error:', error)
    const $ = cheerio.load(body)
    const table = $('table')
    if (table) {
      if (!(table.text()).includes("Non-Canon Alert!"))
        mapirano.push(item)
      else
        console.log('nekanon')
    }
    if (i == length - 1) fs.writeFileSync('mapirano.json', JSON.stringify(mapirano, null, 2))
  })
}
