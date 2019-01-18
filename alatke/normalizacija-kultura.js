const fs = require('fs')
const karakteri = require('./filtrirano.json')

const obradjeno = karakteri.map(x => {
  if (x.race == "Balrogs") 
    x.culture = "Demons"

  // if (x.culture && x.culture.includes("Maiar")) {
  //   const house = x.culture.match(/\(.{1,30}\)/g)
  //   console.log(house)
  //   if (house)
  //     x.house = house[0].replace(/[()]/g, "")
  // }
  return x
})

fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))
