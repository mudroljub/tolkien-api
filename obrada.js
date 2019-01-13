const fs = require('fs')

const podaci = require('./data/ostalo.json')
const mapirano = podaci.filter(k => k.race && k.gender)

fs.writeFileSync('mapirano.json', JSON.stringify(mapirano, null, 2))