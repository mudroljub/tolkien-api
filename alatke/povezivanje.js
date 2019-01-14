const fs = require('fs')
const podaci = require('./data/ostalo.json')
const mapirano = require('./ostalo-mapirano.json')

const azurirano = podaci.map(k => {
  const nadjeno = mapirano.find(b => b.title == k.title)
  if (nadjeno) {
    console.log(Object.keys(k))
    console.log(Object.keys(nadjeno))
    for (const kljuc in nadjeno) {
      if (!k[kljuc]) k[kljuc] = nadjeno[kljuc].trim()
    }
  }
  return k
})

fs.writeFileSync('azurirano.json', JSON.stringify(azurirano, null, 2))