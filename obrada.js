const fs = require('fs')
const podaci = require('./data/races.json')
// const kulture = require('./data/races.json')

// koliko kojih atributa
const recnik = podaci.reduce((acc, x) => {
  for (const key in x) {
    acc[key] = acc[key] ? acc[key] + 1 : 1
  }
  return acc
}, {})

Object.keys(recnik)
      .sort((a, b) => recnik[b] - recnik[a])
      .forEach(function(k) {
          console.log(k, recnik[k])
       })

/* mapira karaktere sa kulturom ili rasom */

// const a = new Set(podaci.map(x => x.race).sort())
// const b = new Set(kulture.map(x => x.title).sort())
// const difference = new Set(
//   [...a].filter(x => !b.has(x)).sort())

// console.log("Koristene: ")
// console.log(a)
// console.log("Postojece: ")
// console.log(b)
// console.log("Fali: ")
// console.log(difference)

const obradjeno = podaci.map(x => {
  // if (x.dominions && !x.locations) {
  //   x.locations = x.dominions
  // }
  delete x.gallery
  return x
})

fs.writeFileSync('filtrirano.json', JSON.stringify(obradjeno, null, 2))