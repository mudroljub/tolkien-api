const fs = require('fs')
const ostalo = require('./ostalo.json')

let pesme = require('./pesme.json')
let pesmeOstale = require('./pesme-ostale.json')

pesme = pesme.map(p => p.title)
filtrirano = pesmeOstale.filter(p => !pesme.includes(p))

// const filtrirano = ostalo
// .filter(x => pesmeOstale.includes(x.title))
// .map(x => {
//   const index = x.text.indexOf("\n\nTrivia")
//   if (index > 0) {
//     x.text = x.text.substring(0, index)
//   }
//   return x
// })

// fs.writeFileSync('pesme-ostale.json', JSON.stringify(filtrirano, null, 2))
