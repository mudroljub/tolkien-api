const fs = require('fs')
const pandoc = require('simple-pandoc')
const convert = pandoc('mediawiki', 'plain')
const mapirano = require('./mapirano.json')

const obecanja = mapirano.map(async x => {
  for (kljuc in x) {
    console.log(x[kljuc])
    x[kljuc] = await convert(x[kljuc])
  }
  return x
})

Promise.all(obecanja).then(ispunjeno => {
  fs.writeFileSync('konvertovano.json', JSON.stringify(ispunjeno, null, 4))
})
