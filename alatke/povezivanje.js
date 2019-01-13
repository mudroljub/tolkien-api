const fs = require('fs')
const podaci = require('./data/karakteri.json')
const bekap = require('./data/bekap/stranice-bekap.json')

const mapirano = podaci.map(k => {
  const nadjeno = bekap.find(b => b.title._text == k.name)
  if (nadjeno) {
    k.page_id = nadjeno.id._text
  }
  return k
})

fs.writeFileSync('mapirano.json', JSON.stringify(mapirano, null, 2))