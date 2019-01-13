const fs = require('fs')
const pandoc = require('simple-pandoc')

const podaci = require('./stranice9.json')
const convert = pandoc('mediawiki', 'plain')

const obecanja = podaci
  .map(async x => {
    const text = x.revision.text._text
    x.revision.text._text = await convert(text)
    return x
  })

Promise.all(obecanja).then(mapirano => {
  fs.writeFileSync('stranice10.json', JSON.stringify(mapirano, null, 4))
})
