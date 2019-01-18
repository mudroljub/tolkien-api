const fs = require('fs')
const pandoc = require('simple-pandoc')
const convert = pandoc('mediawiki', 'plain')

module.exports = function (item) {
  delete item.gallery
  delete item.actor
  delete item.voice

  const obecanja = []
  for (const key in item) {
    item[key] = convert(item[key])
      .then(res => {
        item[key] = res.trim().replace(/\[.{1,20}\]/g, "")
        if (key != "text") item[key] = item[key].split("\n").join(", ").replace(",,", ",")
      })
    obecanja.push(item[key])
  }

  Promise.all(obecanja).then(function(values) {
    fs.writeFileSync('item.json', JSON.stringify(item, null, 2))
  })
}
