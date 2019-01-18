const fs = require('fs')
const podaci = require('./data/characters.json')

const obradjeno = podaci
  .map(x => {
    for (const key in x) {
      if (key == "text") continue
      x[key] = x[key].split("\n").join(", ")
    }
    return x
  })

fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))
