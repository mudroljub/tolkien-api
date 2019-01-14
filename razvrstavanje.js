const fs = require('fs')

const podaci = require('./data/ostalo.json')

podaci.map(item => {
  if (Object.keys(item).length > 3) console.log(Object.keys(item))
})

const filtrirano = podaci.filter(k => !k.languages)

fs.writeFileSync('filtrirano.json', JSON.stringify(filtrirano, null, 2))