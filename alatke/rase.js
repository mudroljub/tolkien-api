const fs = require('fs')
const ostalo = require('./data/ostalo.json')

const rase = [
  "Men",
  "Elves",
  "Dwarves",
  "Hobbits",
  "Valar",
  "Maiar",
  "Orcs", 
  "Balrogs",
  "Huorns",
  "Beorning",
  "Dragons",
  "Ents",
  "Trolls",
  "Giants", 
  "Uruk-hai",
  "Half-orc",
  "Wizards",
  "Half-elven"
]

const filtrirano = ostalo.filter(x => !rase.includes(x.title))

fs.writeFileSync('ostalo.json', JSON.stringify(filtrirano, null, 2))
