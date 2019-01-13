const fs = require('fs')
const podaci = require('./data/ostalo.json')
const bekap = require('./data/bekap/ostalo-bekap.json')

const mapirano = podaci.map(k => {
  const nadjeno = bekap.find(b => b.title == k.title)
  if (nadjeno) {
    k.text = nadjeno.text
  }
  return k
})

fs.writeFileSync('mapirano.json', JSON.stringify(mapirano, null, 2))