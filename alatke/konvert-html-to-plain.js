const fs = require('fs')
const pandoc = require('simple-pandoc')
const convert = pandoc('html', 'plain')
const mapirano = require('./mapirano.json')

const obecanja = mapirano.map(async x => {
  for (kljuc in x) {
    // ["name", "lotrUrl", "race", "text"]
    if (["title", "lotr_page_id", "text"].includes(kljuc)) continue
    x[kljuc] = await convert(x[kljuc])
  }
  return x
})

Promise.all(obecanja).then(ispunjeno => {
  fs.writeFileSync('konvertovano.json', JSON.stringify(ispunjeno, null, 4))
})
