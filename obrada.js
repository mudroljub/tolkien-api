const fs = require('fs')
const ostalo = require('./data/ostalo.json')

const filtrirano = ostalo
.filter(x => x.title.toLowerCase().split(' ').includes('song'))
// .map(x => {
//   const index = x.text.indexOf("\n\nTrivia")
//   if (index > 0) {
//     x.text = x.text.substring(0, index)
//   }
//   return x
// })

fs.writeFileSync('pesme.json', JSON.stringify(filtrirano, null, 2))
