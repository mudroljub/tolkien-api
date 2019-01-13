const fs = require('fs')

const podaci = require('./data/ostalo.json')
const mapirano = podaci.map(k => {
  if (k.race) console.log(k.title)
  return k
})

// fs.writeFileSync('mapirano.json', JSON.stringify(mapirano, null, 2))