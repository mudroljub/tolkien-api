const fs = require('fs')
const pandoc = require('simple-pandoc')
var nodePandoc = require('node-pandoc')
const convert = pandoc('mediawiki', 'plain')
const item = require('./item.json')

const obecanja = []
for (const key in item) {
  // if (key == "text") continue
  item[key] = convert(item[key]).then(res => item[key] = res.trim())
  obecanja.push(item[key])
}


Promise.all(obecanja).then(function(values) {
  console.log(item)
  fs.writeFileSync('razreseno.json', JSON.stringify(item, null, 2))
})