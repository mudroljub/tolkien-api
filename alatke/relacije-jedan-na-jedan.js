const fs = require('fs')
const podaci = require('../data/characters.json')
const odrednice = require('../data/cultures.json')
const kljuc = 'house'

const koristeno = new Set(podaci.map(x => x[kljuc]).sort())
const postojece = odrednice.map(x => x.name).sort()

console.log("Koristene: ")
console.log(koristeno)
// console.log("Postojece :")
// console.log(postojece)

const razlika = [...koristeno].filter(x => !postojece.includes(x)).sort()

console.log("Fale: ")
console.log(razlika)
