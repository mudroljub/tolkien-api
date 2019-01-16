const fs = require('fs')
const podaci = require('./data/characters.json')
const kulture = require('./data/cultures.json')

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

const a = new Set(podaci.map(x => x.culture).sort())
const b = new Set(kulture.map(x => x.title).sort())
const difference = new Set(
  [...a].filter(x => !b.has(x)).sort())

console.log("Koristene kulture: ")
console.log(a)
console.log("Postojece kulture: ")
console.log(b)
console.log("Fali: ")
console.log(difference)

// const obradjeno = podaci
// .filter(x => !x.race)
// .map(x => {
//   delete x.data_race
//   return x
// })

// fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))