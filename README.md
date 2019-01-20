# Tolkien API

Zvaničan LOTR API:
- http://lotr.wikia.com/api.php

Otvaranje članka po id-u:
- http://lotr.wikia.com/?curid=27

## TODO

- povezati slike sa https://lotr.wikia.com/ ili http://www.tolkiengateway.net/

## Model

Class Character

  name 377
  text 377
  gender 377
  lotr_page_id 377
  race 377 +
  culture 358 +
  birth 338
  death 337
  titles 300
  other_names 271
  spouse 270
  hair 234
  weapon 214
  location 134 +
  rule 92
  height 70
  eyes 62
  parentage 39
  house 27
  siblings 26
  children 25

Class Battle

  name 82
  lotr_page_id 82
  location 82 +
  text 82
  conflict 44
  outcome 44
  date 43

Class Culture

  name 94
  text 94
  lotr_page_id 94
  locations 52
  notable_members 46 ++
  languages 43
  lifespan 39
  other_names 28
  height 27
  distinctions 26
  origins 25
  skin_color 23
  hair_color 18

Class Location

  name 439
  text 439
  lotr_page_id 439
  position 243
  type 233
  description 184
  cultures 180 ++
  other_names 122
  lifespan 93
  governance 92
  languages 86
  events 81
  founded_or_built 81
  regions 76
  major_towns 33
  capital 28

Class Race

  name 24
  locations 24
  distinctions 24
  text 24
  lotr_page_id 24
  notable_members 20 ++
  height 18
  languages 17
  lifespan 17
  skin_color 15
  other_names 12
  origins 12
  affiliation 10
  hair_color 8
  rivalries 8
  cultures 7  ++

Class Artefact

  name 63
  lotr_page_id 63
  text 63
  owner 28 +
  location 17 +
  appearance 16
  other_names 12
  usage 9

Class Quote

  text 50
  character 50 +
  source 50
