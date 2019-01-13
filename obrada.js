const fs = require('fs')

const podaci = require('./ostalo.json')
const mapirano = podaci.map(k => {
  for (const kljuc in k) {
    k[kljuc] = k[kljuc].trim()
  }
  return k
})

fs.writeFileSync('mapirano.json', JSON.stringify(mapirano, null, 2))