# Tolkien API

Zvaničan LOTR API:
- http://lotr.wikia.com/api.php

Otvaranje članka po id-u:
- http://lotr.wikia.com/?curid=27

## TODO

- povezati slike sa https://lotr.wikia.com/ ili http://www.tolkiengateway.net/

## Model

Class Character

  name 390
  text 390
  race 390 +
  gender 390
  lotr_page_id 390
  culture 368 +
  birth 350
  death 345
  titles 308
  spouse 278
  other_names 275
  hair 234
  weapon 218
  location 147 +
  rule 94
  height 72
  eyes 64

Class Race

  name 23
  locations 23 ++
  distinctions 23
  text 23
  lotr_page_id 23
  characters 21 ++
  languages 16
  height 16
  skin_color 13
  other_names 13
  lifespan 12
  origins 11
  hair_color 8

Class Culture

  name 97
  text 97
  lotr_page_id 97
  locations 55 ++
  characters 48 ++
  languages 45
  lifespan 40
  other_names 30
  distinctions 27
  origins 27
  height 26
  skin_color 24
  hair_color 19

Class Location

  name 449
  text 449
  lotr_page_id 449
  position 252
  type 241
  cultures 212 ++
  description 191
  other_names 128
  lifespan 100
  governance 98
  founded_or_built 85
  regions 81
  events 81
  major_towns 34
  capital 30

Class Battle

  name 82
  lotr_page_id 82
  location 82 +
  text 82
  conflict 44
  outcome 44
  date 43

Class Artefact

  name 50
  lotr_page_id 50
  text 50
  character 50 +
  location 14 +
  appearance 13
  usage 9
  other_names 9

Class Quote

  text 50
  character 50 +
  source 50

## Fale

- Kulture:
  'Elves of Rivendell',
  'Ents of Fangorn Forest',
  'Hobbits of the Shire',
  'Orcs of Morgoth',
  'Orcs of the Misty Mountains',
  'Dwarves of the Blue Mountains'

- Karakteri:
  'Elladan', 'Elrohir'
  'Fíli', 'Kíli', 'Orophin', 'Rúmil', 'Ulfast' 