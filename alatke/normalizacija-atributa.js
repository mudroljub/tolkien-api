const fs = require('fs')
const karakteri = require('./filtrirano.json')

const obradjeno = karakteri.map(x => {
  if (x.race == "Balrogs") 
    x.culture = "Demons"
  return x
})

fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))
