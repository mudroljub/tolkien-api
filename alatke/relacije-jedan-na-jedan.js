const fs = require('fs')
const karakteri = require('../data/battles.json')
const odrednice = require('../data/locations.json')
const kljuc = 'location'

const koristeno = new Set(karakteri.map(x => x[kljuc]).sort())
const postojece = odrednice.map(x => x.name).sort()

console.log("Koristene: ")
console.log(koristeno)
// console.log("Postojece :")
// console.log(postojece)

const razlika = [...koristeno].filter(x => !postojece.includes(x)).sort()

console.log("Fale: ")
console.log(razlika)
