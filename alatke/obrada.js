const fs = require('fs')
const podaci = require('../data/locations.json')

const obradjeno = podaci
  .sort((a, b) => a.text.length - b.text.length)
  .map(x => {
    if (x.lord && !x.governance) x.governance = x.lord
    delete x.lord
    return x
  })

fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))
