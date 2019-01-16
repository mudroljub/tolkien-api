const fs = require('fs')
const podaci = require('./data/characters.json')
const rase = require('./data/races.json')

/*
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
*/

const a = new Set(podaci.map(x => x.race))
const b = new Set(rase.map(x => x.title))
const difference = new Set(
  [...a].filter(x => !b.has(x)))

console.log("Postojece rase: ")
console.log(a)
console.log("Koristene rase: ")
console.log(b)
console.log(difference)

// const obradjeno = podaci
// .filter(x => !x.race)
// .map(x => {
//   delete x.data_race
//   return x
// })

// fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))