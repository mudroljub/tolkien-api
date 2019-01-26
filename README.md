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
  parentage 46
  house 29 +

Class Race

  name 24
  locations 24 ++
  distinctions 24
  text 24
  lotr_page_id 24
  characters 20 ++
  height 18
  languages 17
  lifespan 17
  skin_color 15
  other_names 12
  origins 12
  hair_color 8
  cultures 7 ++

Class Culture

  name 98
  text 98
  lotr_page_id 98
  locations 56 ++
  characters 49 ++
  languages 46
  lifespan 41
  other_names 31
  distinctions 28
  height 27
  origins 27
  skin_color 24
  hair_color 19

Class Location

  name 448
  text 448
  lotr_page_id 448
  position 251
  type 240
  cultures 211 ++
  description 190
  other_names 127
  lifespan 101
  governance 100
  founded_or_built 86
  regions 81
  events 81
  major_towns 34
  capital 32

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
