const fs = require('fs')
const  xmlParser = require('xml2json')

fajl = fs.readFileSync('lotr_pages_current.xml', 'utf8')
fs.writeFileSync('lotr-wiki2.json', xmlParser.toJson(fajl))

console.log('gotovo')