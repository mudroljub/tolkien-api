const fs = require('fs')
const podaci = require('../data/races.json')

const obradjeno = podaci
  .sort((a, b) => a.text.length - b.text.length)
  .map(x => {
    if (!x.notable_members) {
      console.log(x.name)
    }
    return x
  })

// fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))
