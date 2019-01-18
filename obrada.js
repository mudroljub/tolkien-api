const fs = require('fs')
const podaci = require('./data/cultures.json')
const karakteri = require('./data/characters.json')

// koliko kojih atributa
const recnik = podaci.reduce((acc, x) => {
  for (const key in x) {
    acc[key] = acc[key] ? acc[key] + 1 : 1
  }
  return acc
}, {})

Object.keys(recnik)
      .sort((a, b) => recnik[b] - recnik[a])
      .forEach(function(k) {
          console.log(k, recnik[k])
       })


// skup karaktera koji se pominju
const bitniKarakteri = podaci.reduce((acc, x) => {
  if (x.notable_members) {
    if (x.notable_members.includes("Maiar")) console.log(x.name)
    return new Set([...acc, ...x.notable_members.split(", ")].sort())
  }
  return acc
}, new Set())

/* mapira karaktere sa necim */

// const a = new Set(podaci.map(x => x.cultures).sort())
const postojeci = new Set(karakteri.map(x => x.name).sort())
const difference = new Set(
  [...bitniKarakteri].filter(x => !postojeci.has(x)).sort())

console.log("Bitni karakteri: ")
console.log(bitniKarakteri)
console.log("Postojeci: ")
console.log(postojeci)
console.log("Fali: ")
console.log(difference)


// const obradjeno = podaci.map(x => {
//   if (x.members) {
//     x.notable_members = x.members
//     delete x.members
//   }

//   for (const k in x) {
//     if (k == "text") continue
//     x[k] = x[k].split("\n").join(", ")
//   }
//   delete x.pronunciation
//   return x
// })

const obradjeno = karakteri
  .sort((a, b) => a.text.length - b.text.length)
  // .filter(x => x.culture && x.culture.toLowerCase().includes("hobbit"))
fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))