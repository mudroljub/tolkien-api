const fs = require('fs')
const podaci = require('../data/races.json')

const obradjeno = podaci
  .sort((a, b) => a.text.length - b.text.length)
  .map(x => {
    for (const key in x) {
      if (x[key] == "Unknown")
        delete x[key]
    }
    return x
  })

fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))
