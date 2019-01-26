const fs = require('fs')
const podaci = require('../data/characters.json')

const obradjeno = podaci
  .sort((a, b) => a.text.length - b.text.length)
  .map(x => {
    // if (x.spouse && x.spouse.toLowerCase().startsWith("loved"))
    //   delete x.spouse
    return x
  })

fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))
