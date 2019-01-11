const convert = require('xml-js')
const fs = require('fs')

const xml = fs.readFileSync('./lotr_pages_current.xml', 'utf8')

const result = convert.xml2json(xml, {compact: true, spaces: 4})
fs.writeFileSync('lotr-wiki.json', result)

console.log('gotovo')