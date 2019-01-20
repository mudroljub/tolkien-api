const podaci = require('../data/races.json')
const odrednice = require('../data/cultures.json')
const veza = 'cultures'

const koristeniKarakteri = podaci.reduce((acc, x) => {
  if (x[veza]) {
    return new Set([...acc, ...x[veza].split(", ")].sort())
  }
  return acc
}, new Set())

const a = new Set(podaci.map(x => x.cultures).sort())
const postojeci = new Set(odrednice.map(x => x.name).sort())
const razlika = new Set(
  [...koristeniKarakteri].filter(x => !postojeci.has(x)).sort())

console.log("Koristeno: ")
console.log(koristeniKarakteri)
// console.log("Svi postojeci: ")
// console.log(postojeci)
console.log("Fali: ")
console.log(razlika)