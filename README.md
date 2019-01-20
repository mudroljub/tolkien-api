# Tolkien API

Zvaničan LOTR API:
- http://lotr.wikia.com/api.php

Otvaranje članka po id-u:
- http://lotr.wikia.com/?curid=27

## TODO

- povezati slike sa https://lotr.wikia.com/ ili http://www.tolkiengateway.net/

## Model

Class Character

  name 385
  race 385 +
  gender 385
  text 385
  lotr_page_id 385
  culture 364 +
  birth 345
  death 342
  titles 306
  spouse 275
  other_names 273
  hair 234
  weapon 216
  location 142 +
  rule 93
  height 71
  eyes 64
  parentage 44
  siblings 29
  house 28

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

  name 446
  text 446
  lotr_page_id 446
  position 249
  type 239
  description 189
  cultures 184 ++
  other_names 126
  lifespan 100
  governance 98
  founded_or_built 85
  events 81
  regions 80
  major_towns 34
  capital 31

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
