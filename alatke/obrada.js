const fs = require('fs')
const podaci = require('../data/artefacts.json')

const obradjeno = podaci
  .sort((a, b) => a.text.length - b.text.length)
  .map(x => {
  //  if (!x.cultures && x.inhabitants) {
  //    x.cultures = x.inhabitants
  //    delete x.inhabitants
  //  }
    if (!x.owner) console.log(x.name)
    return x
  })

fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))
