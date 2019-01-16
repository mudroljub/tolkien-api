const fs = require('fs')
const podaci = require('./data/races.json')

const sredjeno = podaci.map(x => {
  for (const key in x) {
    const vrednost = x[key]
    const newKey = key.replace(/\s/g, "_")
    delete x[key]
    x[newKey] = vrednost
  }
  return x
})

fs.writeFileSync('sredjeno.json', JSON.stringify(sredjeno, null, 2))