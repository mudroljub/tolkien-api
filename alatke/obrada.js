const fs = require('fs')
const podaci = require('../data/locations.json')

const obradjeno = podaci
  .sort((a, b) => a.text.length - b.text.length)
  .map(x => {
  //  if (!x.cultures && x.inhabitants) {
  //    x.cultures = x.inhabitants
  //    delete x.inhabitants
  //  }
    delete x.languages
    return x
  })

fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))
