const fs = require('fs')
const pandoc = require('simple-pandoc')
const convert = pandoc('mediawiki', 'plain')

module.exports = function (item) {
  const obecanja = []
  delete item.gallery
  delete item.actor
  delete item.voice
  for (const key in item) {
    item[key] = convert(item[key]).then(res => item[key] = res.trim())
    obecanja.push(item[key])
  }

  Promise.all(obecanja).then(function(values) {
    fs.writeFileSync('item.json', JSON.stringify(item, null, 2))
  })
}
