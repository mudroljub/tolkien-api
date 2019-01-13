const fs = require('fs')

const podaci = require('./data/ostalo.json')
const mapirano = podaci.filter(k => k.gender)

console.log(mapirano)
// fs.writeFileSync('ostalo.json', JSON.stringify(mapirano, null, 2))