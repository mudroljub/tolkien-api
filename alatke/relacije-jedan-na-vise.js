const podaci = require('../data/locations.json')
const odrednice = require('../data/cultures.json')
const veza = 'cultures'

const koristeno = podaci.reduce((acc, x) => {
  if (x[veza]) {
    return new Set([...acc, ...x[veza].split(", ")].sort())
  }
  return acc
}, new Set())

const postojece = new Set(odrednice.map(x => x.name).sort())
const razlika = new Set(
  [...koristeno].filter(x => !postojece.has(x)).sort())

console.log("Koristeno: ")
console.log(koristeno)
// console.log("Postojece: ")
// console.log(postojece)
console.log("Fali: ")
console.log(razlika)