const fs = require('fs')
const karakteri = require('./filtrirano.json')
const kulture = require('./data/cultures.json')

const koristeneKulture = new Set(karakteri.map(x => x.culture).sort())
const postojeceKulture = new Set(kulture.map(x => x.name).sort())

console.log("Koristene kulture")
console.log(koristeneKulture)
console.log("Postojece kulture")
console.log(postojeceKulture)

const razlika = new Set(
  [...koristeneKulture].filter(x => !postojeceKulture.has(x)).sort())

console.log("Fale: ")
console.log(razlika)
