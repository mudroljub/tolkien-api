const podaci = require('./data/races.json')
const karakteri = require('./data/characters.json')

// skup karaktera koji se pominju u rasi ili kulturi
const bitniKarakteri = podaci.reduce((acc, x) => {
  if (x.notable_members) {
    return new Set([...acc, ...x.notable_members.split(", ")].sort())
  }
  return acc
}, new Set())

const a = new Set(podaci.map(x => x.cultures).sort())
const postojeci = new Set(karakteri.map(x => x.name).sort())
const difference = new Set(
  [...bitniKarakteri].filter(x => !postojeci.has(x)).sort())

console.log("Bitni karakteri: ")
console.log(bitniKarakteri)
// console.log("Svi postojeci: ")
// console.log(postojeci)
console.log("Fale: ")
console.log(difference)