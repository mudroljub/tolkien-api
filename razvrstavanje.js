const fs = require('fs')
const podaci = require('./data/bitke.json')

// precistiti sve atribute koji pocinju novim redom
const filtrirano = podaci.map(x => {
  for (const key in x) {
    if (key.startsWith("\n")) delete x[key]
  }
  return x
})

fs.writeFileSync('mapirano.json', JSON.stringify(filtrirano, null, 2))