const podaci = require('../data/races.json')
const karakteri = require('../data/characters.json')

// karakteri koji se koriste u podacima
const koristeniKarakteri = podaci.reduce((acc, x) => {
  if (x.notable_members) {
    return new Set([...acc, ...x.notable_members.split(", ")].sort())
  }
  return acc
}, new Set())

const a = new Set(podaci.map(x => x.cultures).sort())
const postojeci = new Set(karakteri.map(x => x.name).sort())
const razlika = new Set(
  [...koristeniKarakteri].filter(x => !postojeci.has(x)).sort())

console.log("Koristeno: ")
console.log(koristeniKarakteri)
// console.log("Svi postojeci: ")
// console.log(postojeci)
console.log("Fali: ")
console.log(razlika)