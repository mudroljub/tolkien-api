const fs = require('fs')
const ostalo = require('./data/ostalo.json')

const filtrirano = ostalo
.filter(x => !x.title.startsWith('SR '))
.map(x => {
  const index = x.text.indexOf("\n\nAppearances in adaptations")
  if (index > 0) {
    x.text = x.text.substring(0, index)
  }
  return x
})

fs.writeFileSync('ostalo.json', JSON.stringify(filtrirano, null, 2))
