# ekmnoop mod
This is currently a mod for [Pokémon Showdown](https://github.com/Zarel/Pokemon-Showdown), a free and open source Pokémon battle simulator. However, in the long run I intend to reuse the data for a new, fan-made, free, cross-platform (GNU/Linux, Apple Mac OS X, Microsoft Windows) Pokémon role-playing game, similar to but different from Nintendo's official game series.

## Table of contents
* [Changes](https://github.com/ekmnoop/myshowdownmod#desired-gameplay-mechanics)
  * [Evolution](https://github.com/ekmnoop/myshowdownmod#evolution)
  * [Types](https://github.com/ekmnoop/myshowdownmod#types)
    * [Move types](https://github.com/ekmnoop/myshowdownmod#move-types)
    * [Pokemon types](https://github.com/ekmnoop/myshowdownmod#pokemon-types)
* [Desired gameplay mechanics](https://github.com/ekmnoop/myshowdownmod#changes)
* [Terminology](https://github.com/ekmnoop/myshowdownmod#terminology)



## Changes
* Five new types: **Air**, **Bat**, **Bird**, **Fish**, **Light**.

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

### Evolution
All Pokémon can evolve without being traded and irrespective of happiness, specific location, or time
* exposed to an evolutionary stone:
  * Dawn Stone:
    * #133 *Eevee* into #196 *Espeon* (instead of leveled up with high friendship during the morning)
    * #281 *male Kirlia* into #475 *Gallade*
    * #361 *female Snorunt* into #478 *Froslass*
  * Dusk Stone:
    * #133 *Eevee* into #197 *Umbreon* (instead of leveled up with high friendship during the night)
    * #198 *Murkrow* into #430 *Honchkrow*
    * #200 *Misdreavus* into #429 *Mismagius*
    * #608 *Lampent* into #609 *Chandelure*
    * #680 *Doublade* into #681 *Aegislash*
  * Fire Stone:
    * #037 *Vulpix* to evolve into #038 *Ninetales*
    * #058 *Growlithe* into #059 *Arcanine*
    * #077 *Ponyta* into #078 *Rapidash* (instead of at level 40)
    * #133 *Eevee* into #136 *Flareon*
    * #513 *Pansear* into #514 *Simisear*
  * Ice Stone:
    * #027 *Alolan Sandshrew* into #028 *Alolan Sandslash*
    * #037 *Alolan Vulpix* to evolve into #038 *Alolan Ninetales*
    * #133 *Eevee* into #471 *Glaceon* (instead of leveled up near an Ice Rock)
    * #739 *Crabrawler* into #740 *Crabominable* (instead of leveled up at Mount Lanakila)
  * Leaf Stone:
    * #044 *Gloom* into #045 *Vileplume*
    * #070 *Weepinbell* into #071 *Victreebel*
    * #101 *Exeggcute* into #102 *Exeggutor* or #102 *Alolan Exeggutor*
    * #133 *Eevee* into #470 *Leafeon* (instead of leveled up near a Moss Rock)
    * #274 *Nuzleaf* into #275 *Shiftry*
    * #511 *Pansage* into #512 *Simisage*
  * Magnetic Stone (*new, to be created*):
    * #082 *Magneton* into #462 *Magnezone* (instead of leveled up in a special magnetic field)
    * #299 *Nosepass* into #476 *Probopass* (instead of leveled up in a special magnetic field)
    * #737 *Charjabug* into #738 *Vikavolt* (instead of leveled up in a special magnetic field)
  * Moon Stone:
    * #030 *Nidorina* into #031 *Nidoqueen*
    * #033 *Nidorino* into #034 *Nidoking*
    * #035 *Clefairy* into #036 *Clefable*
    * #039 *Jigglypuff* into #040 *Wigglytuff*
    * #517 *Munna* into #518 *Musharna*
  * Oval Stone:
    * #113 *Chansey* into #242 *Blissey*
  * Shiny Stone:
    * #133 *Eevee* into #700 *Sylveon* (instead of leveled up with a *Fairy*-type move and two levels of Affection)
    * #176 *Togetic* into #468 *Togekiss*
    * #315 *Roselia* into #407 *Roserade*
    * #572 *Minccino* into #573 *Cinccino*
    * #670 *Floette* into #671 *Florges*
  * Sun Stone:
    * #044 *Gloom* into #182 *Bellossom*
    * #191 *Sunkern* into #192 *Sunflora*
    * #546 *Cottonee* into #547 *Whimsicott*
    * #548 *Petilil* into #549 *Lilligant*
    * #694 *Helioptile* into #695 *Heliolisk*
  * Thunder Stone:
    * #025 *Pikachu* into #026 *Raichu*
    * #025 *Alolan Pikachu* into #026 *Alolan Raichu*
    * #133 *Eevee* into #135 *Jolteon*
    * #180 *Flaaffy* into #181 *Ampharos* (instead of at level 30)
    * #603 *Eelektrik* into #604 *Eelektross*
  * Water Stone:
    * #061 *Poliwhirl* into #062 *Poliwrath*
    * #090 *Shellder* into #091 *Cloyster*
    * #120 *Staryu* into #121 *Starmie*
    * #133 *Eevee* into #134 *Vaporeon*
    * #183 *Marill* into #184 *Azumarill* (instead of at level 18)
    * #270 *Lombre* into #271 *Ludicolo*
    * #515 *Panpour* into #516 *Simipour*
* level-up while holding item:
  * Deep Sea Scale:
    * #366 *Clamperl* into #368 *Gorebyss* (instead of being traded)
  * Deep Sea Tooth:
    * #366 *Clamperl* into #367 *Huntail* (instead of being traded)
  * Dragon Scale:
    * #117 *Seadra* into #230 *Kingdra* (instead of being traded)
    * #129 *Magikarp* into #130 *Gyarados* (instead of at level 20)
    * #349 *Feebas* into #350 *Milotic* (instead of leveled up with high Beauty or being traded with Prism Scale)
  * Dubious Disc:
    * #233 *Porygon2* into #474 *Porygon-Z* (instead of being traded)
  * Electirizer:
    * #125 *Electabuzz* into #466 *Electivire* (instead of being traded)
  * King's Rock:
    * #061 *Poliwhirl* into #186 *Politoed* (instead of being traded)
    * #079 *Slowpoke* into #199 *Slowking* (instead of being traded)
  * Magmarizer:
    * #126 *Magmar* into #467 *Magmortar* (instead of being traded)
  * Metal Coat:
    * #095 *Onix* into #208 *Steelix* (instead of being traded)
    * #123 *Scyther* into #212 *Scizor* (instead of being traded)
  * Protector:
    * #112 *Rhydon* into #464 *Rhyperior* (instead of being traded)
  * Razor Claw
    * #215 *Sneasel* into #461 *Weavile* holding a Razor Claw
  * Razor Fang:
    * #207 *Gligar* into #472 *Gliscor* holding a Razor Fang
  * Reaper Cloth:
    * #356 *Dusclops* into #477 *Dusknoir* (instead of being traded)
  * Sachet:
    * #682 *Spritzee* into #683 *Aromatisse* (instead of being traded)
  * Up-Grade Disc:
    * #137 *Porygon* into #233 *Porygon2* (instead of being traded)
  * Whipped Dream:
    * #684 *Swirlix* into #685 *Slurpuff* (instead of being traded)
* ordinary level-up:
  * at level 10:
    * #172 *Pichu* into #025 *Pikachu* (instead of leveled up with high friendship)
    * #173 *Cleffa* into #025 *Clefairy* (instead of leveled up with high friendship)
    * #174 *Igglybuff* into #025 *Jigglypuff* (instead of leveled up with high friendship)
    * #175 *Togepi* into #176 *Togetic* (instead of leveled up with high friendship)
    * #298 *Azurill* into #183 *Marill* (instead of leveled up with high friendship)
    * #406 *Budew* into #315 *Roselia* (instead of leveled up with high friendship during the day)
    * #440 *Happiny* into #113 *Chansey* (instead of leveled up while holding an Oval Stone during the day)
  * at level 15:
    * #433 *Chingling* into #358 *Chimecho* (instead of leveled up with high friendship during the night)
    * #458 *Mantyke* into #226 *Mantine* (instead of leveled up with *Remoraid* in party)
  * at level 19:
    * #427 *Buneary* into #428 *Lopunny* (instead of when exposed to a Moon Stone)
  * at level 21:
    * #300 *Skitty* into #301 *Delcatty* (instead of when exposed to a Moon Stone)
  * at level 25:
    * #063 *Abra* into #064 *Kadabra* (instead of at level 16)
    * #066 *Machop* into #067 *Machoke* (instead of at level 28)
    * #446 *Munchlax* into #143 *Snorlax* (instead of leveled up with high friendship)
    * #447 *Riolu* into #448 *Lucario* (instead of leveled up with high friendship during the day)
    * #527 *Woobat* into #528 *Swoobat* (instead of leveled up with high friendship)
  * at level 28:
    * #052 *Alolan Meowth* into #053 *Alolan Persian* (same as ordinary version; instead of leveled up with high friendship)
  * at level 40:
    * #541 *Swadloon* into #542 *Leavanny* (instead of leveled up with high friendship)
  * at level 42:
    * #708 *Phantump* into #709 *Trevenant* (instead of being traded)
    * #710 *Pumpkaboo* into #711 *Gourgeist* (instead of being traded)
  * at level 44:
    * #042 *Golbat* into #169 *Crobat* (instead of leveled up with high friendship)
  * at level 50:
    * #064 *Kadabra* into #065 *Alakazam* (instead of being traded)
    * #067 *Machoke* into #068 *Machamp* (instead of being traded)
    * #075 *Graveler* into #076 *Golem* (instead of being traded)
    * #093 *Haunter* into #094 *Gengar* (instead of being traded)
    * #525 *Boldore* into #526 *Gigalith* (instead of being traded)
    * #533 *Gurdurr* into #534 *Conkeldurr* (instead of being traded)
    * #772 *Type: Null* into #773 *Silvally* (instead of leveled up with high friendship)
* different Pokemon:
  * #588 *Karrablast* into #617 *Accelgor* at level 27 (instead of into *Escavalier* when traded for *Shelmet*)
  * #616 *Shelmet* into #589 *Escavalier* at level 27 (instead of into *Accelgor* when traded for *Karrablast*)

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

### Types 
To do:
* Five new types: **Air**, **Bat**, **Bird**, **Fish**, **Light**.
* Deprecated **Flying**.
* Renamed **Ground** to **Earth**, **Steel** to **Metal**.
* Effectiviness changes of existing types.

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

#### Move types

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

#### Pokemon types

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)



## Desired gameplay mechanics
* fainted Pokémon can not be revived and disappear immediately (similar to releasing them)
* same type attack bonus lowered to 40% (instead of 50%)
* Pokémon can have more than two types
* Pokémon can have multiple abilities simultaneously
* Pokémon can have more than four moves simultaneously
* experience is based on *species* base stat total (`SpeciesBaseStatTotal := HP+PA+PD+SA+SD+CS`)
  * experience required for level `x` is `x^3 * SpeciesBaseStatTotal / 600`
    * e.g. #001 *Bulbasaur* requires 530,000 experience to reach level 100, #002 *Ivysaur* 675,000, #003 *Venusaur* 875,000 (instead of 1,059,860)
    * this also means a Pokémon's level typically drops upon evolution, because the Pokémon's *current* experience remains unchanged while its *required* experience typically goes up
  * experience gain uses `SpeciesBaseStatTotal` instead of *species* base experience yield
    * e.g. #001 *Bulbasaur* has 318 (instead of 64), #002 *Ivysaur* 405 (instead of 142), #003 *Venusaur* 525 (instead of 236)
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

