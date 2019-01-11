const fs = require('fs')
const ostalo = require('./data/ostalo.json')

const filtrirano = ostalo.filter(x => !x.title.includes('Century of the '))

fs.writeFileSync('ostalo.json', JSON.stringify(filtrirano, null, 2))
