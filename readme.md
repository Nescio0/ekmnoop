# ekmnoop mod
This is currently a mod for *Pokémon Showdown*, a free and open source Pokémon battle simulator. However, in the long run I intend to reuse the data for a new, fan-made, free, cross-platform (GNU/Linux, Apple Mac OS X, Microsoft Windows) Pokémon role-playing game, similar to but different from Nintendo's official game series.

## Table of contents
* [Desired gameplay mechanics](https://github.com/ekmnoop/myshowdownmod#changes)
* [Desired gameplay mechanics](https://github.com/ekmnoop/myshowdownmod#desired-gameplay-mechanics)
* [Desired gameplay mechanics](https://github.com/ekmnoop/myshowdownmod#terminology)



## Changes
* Five new types: **Air**, **Bat**, **Bird**, **Fish**, **Light**.
* All Pokémon can evolve without being traded


[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)



## Desired gameplay mechanics
* fainted Pokémon can not be revived and disappear immediately (similar to releasing them)
* Pokémon can have more than two types
* Pokémon can have multiple abilities simultaneously
* Pokémon can have more than four moves simultaneously
* experience is based on *species* base stat total (`SpeciesBaseStatTotal := HP+PA+PD+SA+SD+CS`)
  * experience required for level `x` is `x^3 * SpeciesBaseStatTotal / 600`
    * e.g. *Bulbasaur* requires 530,000 experience to reach level 100, *Ivysaur* 675,000, *Venusaur* 875,000 (instead of 1,059,860)
    * this also means a Pokémon's level typically drops upon evolution, because the Pokémon's *current* experience remains unchanged while its *required* experience typically goes up
  * experience gain uses `SpeciesBaseStatTotal` instead of *species* base experience yield
    * e.g. *Bulbasaur* has 318 (instead of 64), *Ivysaur* 405 (instead of 142), *Venusaur* 525 (instead of 236)
    * multiplied by `LevelLoser / LevelWinner`, to ensure lower level Pokémon level up quicker
* base stat vitamins (HP Up, Protein, Iron, Calcium, Zinc, Carbos) now directly grant +1 stat instead of +10 EV; the number of vitamins you can use on a Pokémon is limited by its level
  * e.g. +10 HP for a level 10 Pokémon or +25 PA, PD, SA, SD each for a level 100 Pokémon
  * wings remain unchanged (+1 EV each)
* simplified sex ratios for realism:
  1. 50% female, 50% male (default)
  1. 100% female
  1. 100% male
  1. 100% neuter

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)



## Terminology
* base stats
  * `HP`: health
  * `PA`: physical attack
  * `PD`: physical defence
  * `SA`: special attack
  * `SD`: special defence
  * `CS`: combat speed
  * “Attack stats”: both physical attack and special attack
  * “Defence stats”: both physical defence and special defence
  * “Physical stats”: both physical attack and physical defence
  * “Special stats”: both special attack and special defence

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

