const fs = require('fs')
const podaci = require('../data/races.json')

const obradjeno = podaci
  .sort((a, b) => a.text.length - b.text.length)
  .map(x => {
    //  if (!x.cultures && x.inhabitants) {
    //    x.cultures = x.inhabitants
    //    delete x.inhabitants
    //  }
    delete x.affiliation
    delete x.rivalries
    return x
  })

fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))
