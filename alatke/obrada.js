const fs = require('fs')
const podaci = require('../data/artefacts.json')

const obradjeno = podaci
  .sort((a, b) => a.text.length - b.text.length)
  .map(x => {
    delete x.created
    delete x.destroyer
    delete x.destroyed
  
    return x
  })

fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))
