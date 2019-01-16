const fs = require('fs')
const podaci = require('./filtrirano.json')

// koliko kojih atributa
const recnik = podaci.reduce((acc, x) => {
  for (const key in x) {
    acc[key] = acc[key] ? acc[key] + 1 : 1
  }
  return acc
}, {})

// sortira po vrednosti atributa
Object.keys(recnik)
      .sort((a, b) => recnik[b] - recnik[a])
      .forEach(function(k) {
          console.log(k, recnik[k])
       })

console.log(new Set(podaci.map(x => x.race)))

const obradjeno = podaci.map(x => {
  if (x.race == "Eagle") x.race = "Eagles"
  return x
})

fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))