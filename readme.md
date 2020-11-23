# ekmnoop mod
This is currently a mod for [Pokémon Showdown](https://github.com/Zarel/Pokemon-Showdown), a free and open source Pokémon battle simulator. However, in the long run I intend to reuse the data for a new, fan-made, free, cross-platform (GNU/Linux, Apple Mac OS X, Microsoft Windows) Pokémon role-playing game, similar to but different from Nintendo's official game series.

## Table of contents
* [Terminology](https://github.com/ekmnoop/myshowdownmod#terminology)
* [Data changes](https://github.com/ekmnoop/myshowdownmod#data-changes)
  * [Types](https://github.com/ekmnoop/myshowdownmod#types)
  * [Moves](https://github.com/ekmnoop/myshowdownmod#moves)
  * [Pokemon](https://github.com/ekmnoop/myshowdownmod#pokemon)
    * [Pokemon evolution](https://github.com/ekmnoop/myshowdownmod#pokemon-evolution)
    * [Pokemon stats](https://github.com/ekmnoop/myshowdownmod#pokemon-stats)
    * [Pokemon types](https://github.com/ekmnoop/myshowdownmod#pokemon-types)
  * [Items](https://github.com/ekmnoop/myshowdownmod#items)
    * [Department Stores](https://github.com/ekmnoop/myshowdownmod#department-stores)
    * [Marts](https://github.com/ekmnoop/myshowdownmod#marts)
* [Desired gameplay mechanics](https://github.com/ekmnoop/myshowdownmod#desired-gameplay-mechanics)



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
* status
  * `brn`: burned
  * `par`: paralysed
  * `slp`: asleep
  * `frz`: frozen
  * `psn`: poisoned
  * `tox`: badly poisoned

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)



## Data changes

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

### Types
* Deprecated:
  * **Flying**
* New types:
  * **Air**:
    * not very effective vs **Dragon**
    * no effect vs **Rock**
  * **Bat**:
    * super-effective vs **Fighting**, **Psychic**
    * not very effective vs **Ghost**, **Rock**
    * no effect vs **Steel**
  * **Bird**:
    * super-effective vs **Bug**
    * not very effective vs **Rock**, **Steel**
  * **Fish**:
  * **Light**:
    * super-effective vs **Bat**, **Dark**, **Ghost**
    * not very effective vs **Rock**, **Steel**
    * no effect vs **Grass**
* Effectiviness changes of existing types:
  * **Bug** is not very effective vs **Bird** (new)
  * **Dark** has no effect vs **Light** (new)
  * **Electric** is not very effective vs **Air** (new)
  * **Electric** is normally effective vs **Dragon** (instead of not very effective)
  * **Electric** is super-effective vs **Steel** (instead of normally effective)
  * **Fairy** is normally effective vs **Fire** (instead of not very effective)
  * **Fairy** is not very effective vs **Grass** (instead of normally effective)
  * **Fairy** has no effect vs **Psychic** (instead of normally effective)
  * **Fire** is super-effective vs **Bat** (new)
  * **Fighting** is normally effective vs **Bug** (instead of not very effective)
  * **Ghost** is not very effective vs **Bat** (new)
  * **Ghost** is not very effective vs **Light** (new)
  * **Grass** is not very effective vs **Bird** (new)
  * **Ground** is not very effective vs **Dragon** (instead of normally effective)
  * **Ice** is super-effective vs **Bat** (new)
  * **Ice** is super-effective vs **Fire** (instead of not very effective)
  * **Poison** is not very effective vs **Steel** (instead of no effect)
  * **Psychic** is not very effective vs **Bug** (instead of normally effective)
  * **Psychic** is normally effective vs **Steel** (instead of not very effective)
  * **Rock** is super-effective vs **Bat** (new)
  * **Rock** is super-effective vs **Bird** (new)
  * **Steel** is normally effective vs **Electric** (instead of not very effective)
  * **Steel** is not very effective vs **Fighting** (instead of normally effective)
  * **Steel** is normally effective vs **Fire** (instead of not very effective)
  * **Steel** is normally effective vs **Ice** (instead of super-effective)
  * **Steel** is normally effective vs **Rock** (instead of super-effective)
* **Rock** and **Steel** are normally affected by Sandstorms (instead of immune)

To do:
* Rename **Ground** to **Earth**, **Steel** to **Metal**.

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)


### Moves
* New moves:
* Accuracy changes:
* Base power changes:
  * decreased:
    * from 75 to 70: Drain Punch
    * from 80 to 75: Leech Life
  * increased:
    * from 20 to 40: Absorb
    * from 40 to 60: Mega Drain
    * from 75 to 80: Giga Drain
* PP changes:
  * decreased:
    * from 15 to 10: Dream Eater
    * from 25 to 20: Absorb
  * increased:
    * from 5 to 10: Ancient Power, Ominous Wind, Silver Wind
* Type changes:
  * **Air** instead of **Dragon**: Twister
  * **Air** instead of **Flying**: Aerial Ace, Aeroblast, Air Cutter, Air Slash, Bounce, Defog, Floaty Fall, Fly, G-Max Wind Rage, Gust, Hurricane, Max Airstream, Sky Attack, Supersonic Skystrike, Tailwind
  * **Air** instead of **Normal**: Boom Burst, Sonic Boom, Supersonic, Uproar, Weather Ball, Whirlwind
  * **Bat** instead of **Bug**: Leech Life
  * **Bird** instead of **Flying**: Beak Blast, Brave Bird, Chatter, Drill Peck, Feather Dance, Oblivion Wing, Peck, Pluck, Roost, Sky Drop, Wing Attack
  * **Dragon** instead of **Flying**: Dragon Ascent
  * **Grass** instead of **Poison**: Poison Powder
  * **Ground** instead of **Rock**: Sandstorm
  * **Light** instead of **Bug**: Signal Beam
  * **Light** instead of **Fairy**: Light of Ruin, Moonblast, Moonlight
  * **Light** instead of **Fire**: Sunny Day
  * **Light** instead of **Ghost**: Confuse Ray, Menacing Moonraze Maelstrom, Moongeist Beam
  * **Light** instead of **Grass**: Solar Beam, Solar Blade
  * **Light** instead of **Normal**: Double Team, Flash, Laser Focus, Morning Sun, Simple Beam, Spotlight, Swift
  * **Light** instead of **Psychic**: Glitzy Glow, Light Screen, Light That Burns the Sky, Lunar Dance, Prismatic Laser, Reflect
  * **Light** instead of **Steel**: Flash Cannon
  * **Normal** instead of **Flying**: Acrobatics, Mirror Move
  * **Normal** instead of **Poison**: Coil
* Other changes:
  * Leech Life recovers 2/3 of damage dealt (instead of 1/2)
  * added new `grounded` flag to Dig, Earthquake, Fissure, Magnitude, Rototiller, Spikes, Sticky Web, Toxic Spikes
* To do:
  * Lunar Dance:
    * (instead of fainting the user and fully restoring (HP, PP, status) the Pokémon switched in)
    * affects the user and all allied Pokémon
    * removes all stat changes, cures all status conditions, and heals by 1/4 of HP

<!--
Guard Split, Pain Split, Power Split

-->

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)


### Pokemon

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

#### Pokemon evolution
All Pokémon can evolve without being traded and irrespective of happiness, specific location, or time
* exposed to an evolutionary stone:
  * **Dawn Stone**:
    * #133 *Eevee* into #196 *Espeon* (instead of leveled up with high friendship during the morning)
    * #281 *male Kirlia* into #475 *Gallade*
    * #361 *female Snorunt* into #478 *Froslass*
  * **Dusk Stone**:
    * #133 *Eevee* into #197 *Umbreon* (instead of leveled up with high friendship during the night)
    * #198 *Murkrow* into #430 *Honchkrow*
    * #200 *Misdreavus* into #429 *Mismagius*
    * #608 *Lampent* into #609 *Chandelure*
    * #680 *Doublade* into #681 *Aegislash*
  * **Fire Stone**:
    * #037 *Vulpix* to evolve into #038 *Ninetales*
    * #058 *Growlithe* into #059 *Arcanine*
    * #077 *Ponyta* into #078 *Rapidash* (instead of at level 40)
    * #133 *Eevee* into #136 *Flareon*
    * #513 *Pansear* into #514 *Simisear*
  * **Ice Stone**:
    * #027 *Alolan Sandshrew* into #028 *Alolan Sandslash*
    * #037 *Alolan Vulpix* to evolve into #038 *Alolan Ninetales*
    * #133 *Eevee* into #471 *Glaceon* (instead of leveled up near an Ice Rock)
    * #739 *Crabrawler* into #740 *Crabominable* (instead of leveled up at Mount Lanakila)
  * **Leaf Stone**:
    * #044 *Gloom* into #045 *Vileplume*
    * #070 *Weepinbell* into #071 *Victreebel*
    * #101 *Exeggcute* into #102 *Exeggutor* or #102 *Alolan Exeggutor*
    * #133 *Eevee* into #470 *Leafeon* (instead of leveled up near a Moss Rock)
    * #274 *Nuzleaf* into #275 *Shiftry*
    * #511 *Pansage* into #512 *Simisage*
  * **Magnetic Stone** (*new, to be created*):
    * #082 *Magneton* into #462 *Magnezone* (instead of leveled up in a special magnetic field)
    * #299 *Nosepass* into #476 *Probopass* (instead of leveled up in a special magnetic field)
    * #737 *Charjabug* into #738 *Vikavolt* (instead of leveled up in a special magnetic field)
  * **Moon Stone**:
    * #030 *Nidorina* into #031 *Nidoqueen*
    * #033 *Nidorino* into #034 *Nidoking*
    * #035 *Clefairy* into #036 *Clefable*
    * #039 *Jigglypuff* into #040 *Wigglytuff*
    * #517 *Munna* into #518 *Musharna*
    * #790 *Cosmoem* into #792 *Lunala* (instead of at level 53)
  * **Oval Stone**:
    * #113 *Chansey* into #242 *Blissey*
  * **Shiny Stone**:
    * #133 *Eevee* into #700 *Sylveon* (instead of leveled up with a *Fairy*-type move and two levels of Affection)
    * #176 *Togetic* into #468 *Togekiss*
    * #315 *Roselia* into #407 *Roserade*
    * #572 *Minccino* into #573 *Cinccino*
    * #670 *Floette* into #671 *Florges*
  * **Sun Stone**:
    * #044 *Gloom* into #182 *Bellossom*
    * #191 *Sunkern* into #192 *Sunflora*
    * #546 *Cottonee* into #547 *Whimsicott*
    * #548 *Petilil* into #549 *Lilligant*
    * #694 *Helioptile* into #695 *Heliolisk*
    * #790 *Cosmoem* into #791 *Solgaleo* (instead of at level 53)
  * **Thunder Stone**:
    * #025 *Pikachu* into #026 *Raichu*
    * #025 *Alolan Pikachu* into #026 *Alolan Raichu*
    * #133 *Eevee* into #135 *Jolteon*
    * #180 *Flaaffy* into #181 *Ampharos* (instead of at level 30)
    * #603 *Eelektrik* into #604 *Eelektross*
  * **Water Stone**:
    * #061 *Poliwhirl* into #062 *Poliwrath*
    * #090 *Shellder* into #091 *Cloyster*
    * #120 *Staryu* into #121 *Starmie*
    * #133 *Eevee* into #134 *Vaporeon*
    * #183 *Marill* into #184 *Azumarill* (instead of at level 18)
    * #270 *Lombre* into #271 *Ludicolo*
    * #515 *Panpour* into #516 *Simipour*
* level-up while holding item:
  * **Deep Sea Scale**:
    * #366 *Clamperl* into #368 *Gorebyss* (instead of being traded)
  * **Deep Sea Tooth**:
    * #366 *Clamperl* into #367 *Huntail* (instead of being traded)
  * **Dragon Scale**:
    * #117 *Seadra* into #230 *Kingdra* (instead of being traded)
    * #129 *Magikarp* into #130 *Gyarados* (instead of at level 20)
    * #349 *Feebas* into #350 *Milotic* (instead of leveled up with high Beauty or being traded with Prism Scale)
  * **Dubious Disc**:
    * #233 *Porygon2* into #474 *Porygon-Z* (instead of being traded)
  * **Electirizer**:
    * #125 *Electabuzz* into #466 *Electivire* (instead of being traded)
  * **King's Rock**:
    * #061 *Poliwhirl* into #186 *Politoed* (instead of being traded)
    * #079 *Slowpoke* into #199 *Slowking* (instead of being traded)
  * **Magmarizer**:
    * #126 *Magmar* into #467 *Magmortar* (instead of being traded)
  * **Metal Coat**:
    * #095 *Onix* into #208 *Steelix* (instead of being traded)
    * #123 *Scyther* into #212 *Scizor* (instead of being traded)
  * **Protector**:
    * #112 *Rhydon* into #464 *Rhyperior* (instead of being traded)
  * **Razor Claw**:
    * #215 *Sneasel* into #461 *Weavile* holding a Razor Claw
  * **Razor Fang**:
    * #207 *Gligar* into #472 *Gliscor* holding a Razor Fang
  * **Reaper Cloth**:
    * #356 *Dusclops* into #477 *Dusknoir* (instead of being traded)
  * **Sachet**:
    * #682 *Spritzee* into #683 *Aromatisse* (instead of being traded)
  * **Up-Grade Disc**:
    * #137 *Porygon* into #233 *Porygon2* (instead of being traded)
  * **Whipped Dream**:
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
    * #772 *Type: Null* into #773 *Silvally* (instead of leveled up with high friendship)
  * at level 44:
    * #042 *Golbat* into #169 *Crobat* (instead of leveled up with high friendship)
  * at level 50:
    * #064 *Kadabra* into #065 *Alakazam* (instead of being traded)
    * #067 *Machoke* into #068 *Machamp* (instead of being traded)
    * #075 *Graveler* into #076 *Golem* (instead of being traded)
    * #093 *Haunter* into #094 *Gengar* (instead of being traded)
    * #525 *Boldore* into #526 *Gigalith* (instead of being traded)
    * #533 *Gurdurr* into #534 *Conkeldurr* (instead of being traded)
* different Pokemon:
  * #588 *Karrablast* into #617 *Accelgor* at level 27 (instead of into *Escavalier* when traded for *Shelmet*)
  * #616 *Shelmet* into #589 *Escavalier* at level 27 (instead of into *Accelgor* when traded for *Karrablast*)
  * #718 *Zygarde 10% forme* evolves into *Zygarde 50% forme* at level 50, which evolves into *Zygarde complete forme* at level 100
* starter Pokemon:
  * first evolution at level 20:
    * #001 *Bulbasaur* into #002 *Ivysaur* (instead of at level 16)
    * #004 *Charmander* into #005 *Charmeleon* (instead of at level 16)
    * #007 *Squirtle* into #008 *Wartortle* (instead of at level 16)
    * #152 *Chikorita* into #153 *Bayleef* (instead of at level 16)
    * #155 *Cyndaquil* into #156 *Quilava* (instead of at level 14)
    * #158 *Totodile* into #159 *Croconaw* (instead of at level 18)
    * #252 *Treecko* into #253 *Grovyle* (instead of at level 16)
    * #255 *Torchic* into #256 *Combusken* (instead of at level 16)
    * #258 *Mudkip* into #259 *Marshtomp* (instead of at level 16)
    * #387 *Turtwig* into #388 *Grotle* (instead of at level 18)
    * #390 *Chimchar* into #391 *Monferno* (instead of at level 14)
    * #393 *Piplup* into #394 *Prinplup* (instead of at level 16)
    * #495 *Snivy* into #496 *Servine* (instead of at level 17)
    * #498 *Tepig* into #499 *Pignite* (instead of at level 17)
    * #501 *Oshawott* into #502 *Dewott* (instead of at level 17)
    * #650 *Chespin* into #651 *Quilladin* (instead of at level 16)
    * #653 *Fennekin* into #654 *Braixen* (instead of at level 16)
    * #656 *Froakie* into #657 *Frogadier* (instead of at level 16)
    * #722 *Rowlet* into #723 *Dartrix* (instead of at level 16)
    * #725 *Litten* into #726 *Torracat* (instead of at level 17)
    * #728 *Popplio* into #729 *Brionne* (instead of at level 17)
    * #810 *Grookey* into #811 *Thwackey* (instead of at level 16)
    * #813 *Scorbunny* into #814 *Raboot* (instead of at level 16)
    * #816 *Sobble* into #817 *Drizzile* (instead of at level 16)
  * second evolution at level 40:
    * #002 *Ivysaur* into #003 *Venusaur* (instead of at level 32)
    * #005 *Charmeleon* into #006 *Charizard* (instead of at level 36)
    * #008 *Wartortle* into #009 *Blastoise* (instead of at level 36)
    * #153 *Bayleef* into #154 *Meganium* (instead of at level 32)
    * #156 *Quilava* into #157 *Typhlosion* (instead of at level 36)
    * #159 *Croconaw* into #160 *Feraligatr* (instead of at level 30)
    * #253 *Grovyle* into #254 *Sceptile* (instead of at level 36)
    * #256 *Combusken* into #257 *Blaziken* (instead of at level 36)
    * #259 *Marshtomp* into #260 *Swampert* (instead of at level 36)
    * #388 *Grotle* into #389 *Torterra* (instead of at level 32)
    * #391 *Monferno* into #392 *Infernape* (instead of at level 36)
    * #394 *Prinplup* into #395 *Empoleon* (instead of at level 36)
    * #496 *Servine* into #497 *Serperior* (instead of at level 36)
    * #499 *Pignite* into #500 *Emboar* (instead of at level 36)
    * #502 *Dewott* into #503 *Samurott* (instead of at level 36)
    * #651 *Quilladin* into #652 *Chesnaught* (instead of at level 36)
    * #654 *Braixen* into #655 *Delphox* (instead of at level 36)
    * #657 *Frogadier* into #658 *Greninja* (instead of at level 36)
    * #723 *Dartrix* into #724 *Decidueye* (instead of at level 34)
    * #726 *Torracat* into #727 *Incineroar* (instead of at level 34)
    * #729 *Brionne* into #730 *Primarina* (instead of at level 34)
    * #811 *Thwackey* into #812 *Rillaboom* (instead of at level 35)
    * #814 *Raboot* into #815 *Cinderace* (instead of at level 35)
    * #817 *Drizzile* into #818 *Inteleon* (instead of at level 35)
<!--
  * at level 36:
    * #138 *Omanyte* into #139 *Omastar* (instead of at level 40)
    * #140 *Kabuto* into #141 *Kabutops* (instead of at level 40)
    * #345 *Lileep* into #346 *Cradily* (instead of at level 40)
    * #347 *Anorith* into #348 *Armaldo* (instead of at level 40)
    * #408 *Cranidos* into #409 *Rampardos* (instead of at level 30)
    * #410 *Shieldon* into #411 *Bastiodon* (instead of at level 30)
    * #564 *Tirtouga* into #565 *Carracosta* (instead of at level 37)
    * #566 *Archen* into #567 *Archeops* (instead of at level 37)
    * #696 *Tyrunt* into #697 *Tyrantrum* (instead of at level 39 during the day)
    * #698 *Amaura* into #699 *Aurorus* (instead of at level 39 during the night)
-->

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

<!--
* Starter: {318, 408, 528}
  * #002 *Ivysaur* +2 PA, +1 PD | total from 405 to 408
  * #003 *Venusaur* +2 PA, +1 PD | total from 525 to 528
    * *Mega Venusaur* +4 PA, +1 PD, -2 SA | total from 625 to 628
  * #153 *Bayleef* +2 PA, +1 SA | total from 405 to 408
  * #154 *Meganium* +2 PA, +1 SA | total from 525 to 528
  * #253 *Grovyle* +3 HP | total from 405 to 408
  * #254 *Sceptile* +3 HP, -5 CS | total from 530 to 528
    * *Mega Sceptile* +3 HP, -5 CS | total from 630 to 628
-->
<!--
* changed in Generation VI:
  * #012 Butterfree +10 SA
  * #015 Beedrill +10 PA
  * #018 Pidgeot +10 CS
  * #025 Pikachu +10 PD and +10 SD
  * #026 Raichu +10 CS
  * #031 Nidoqueen +10 PA
  * #034 Nidoking +10 PA
  * #036 Clefable +10 SA
  * #040 Wigglytuff +10 SA
  * #045 Vileplume +10 SA
  * #062 Poliwrath +10 PA
  * #065 Alakazam +10 SD
  * #071 Victreebel +10 SD
  * #076 Golem +10 PA
  * #181 Ampharos +10 PD
  * #182 Bellossom +10 PD
  * #184 Azumarill +10 SA
  * #189 Jumpluff +10 SD
  * #267 Beautifly +10 SA
  * #295 Exploud +10 SD
  * #398 Staraptor +10 SD
  * #407 Roserade +10 PD
  * #508 Stoutland +10 PA
  * #521 Unfezant +10 PA
  * #526 Gigalith +10 SD
  * #537 Seismitoad +10 PA
  * #542 Leavanny +10 SD
  * #545 Scolipede +10 PA
  * #553 Krookodile +10 PD
* changed in Generation VII:
  * #024 Arbok +10 PA
  * #051 Dugtrio +20 PA
  * #083 Farfetch'd +25 PA
  * #085 Dodrio +10 CS
  * #101 Electrode +10 CS
  * #103 Exeggutor +10 SD
  * #164 Noctowl +10 SA
  * #168 Ariados +10 SD
  * #211 Qwilfish +10 PD
  * #219 Magcargo +10 SA
  * #222 Corsola +10 HP, 10 PD, +10 SD
  * #226 Mantine +20 HP
  * #277 Swellow +25 SA
  * #279 Pelipper +10 SA
  * #284 Masquerain +20 SA, +20 CS
  * #301 Delcatty +20 CS
  * #313 Volbeat +20 PD, +10 SD
  * #314 Illumise +20 PD, +10 SD
  * #337 Lunatone +20 HP
  * #338 Solrock +20 HP
  * #358 Chimecho +10 HP, +10 PD, +10 SD
  * #527 Woobat +10 HP
  * #558 Crustle +10 PA
  * #614 Beartic +20 PA
  * #615 Cryogonal +10 HP, +20 PD
-->

#### Pokemon types
* removed:
  * **Dark**-type from #248 *Tyranitar*
  * **Fire**-type from #250 *Ho-Oh*
  * **Flying**-type from #006 *Charizard*, #012 *Butterfree*, #016 *Pidgey*, #017 *Pidgeotto*, #018 *Pidgeot*, #021 *Spearow*, #022 *Fearow*, #041 *Zubat*, #042 *Golbat*, #083 *Farfetch'd*, #084 *Doduo*, #085 *Dodrio*, #123 *Scyther*, #130 *Gyarados*, #142 *Aerodactyl*, #144 *Articuno*, #145 *Zapdos*, #146 *Moltres*, #149 *Dragonite*, #163 *Hoothoot*, #164 *Noctowl*, #165 *Ledyba*, #166 *Ledian*, #169 *Crobat*, #176 *Togetic*, #177 *Natu*, #178 *Xatu*, #187 *Hoppip*, #188 *Skiploom*, #189 *Jumpluff*, #193 *Yanma*, #198 *Murkrow*, #207 *Gligar*, #225 *Delibird*, #226 *Mantine*, #227 *Skarmory*, #249 *Lugia*, #250 *Ho-Oh*, #267 *Beautifly*, #276 *Taillow*, #277 *Swellow*, #278 *Wingull*, #279 *Pelipper*, #284 *Masquerain*, #291 *Ninjask*, #333 *Swablu*, #334 *Altaria*, #351 *Castform*, #357 *Tropius*, #358 *Chimecho*, #373 *Salamence*, #384 *Rayquaza*, #396 *Starly*, #397 *Staravia*, #398 *Staraptor*, #414 *Mothim*, #415 *Combee*, #416 *Vespiqueen*, #425 *Drifloon*, #426 *Drifblim*, #430 *Honchkrow*, #441 *Chatot*, #458 *Mantyke*, #468 *Togekiss*, #469 *Yanmega*, #472 *Gliscor*, #519 *Pidove*, #520 *Tranquil*, #521 *Unfezant*, #527 *Woobat*, #528 *Swoobat*, #561 *Sigilyph*, #566 *Archen*, #567 *Archeops*, #580 *Ducklett*, #581 *Swanna*, #587 *Emolga*, #627 *Rufflet*, #628 *Braviary*, #629 *Vullaby*, #630 *Mandibuzz*, #642 *Tornadus*, #643 *Thundurus*, #645 *Landorus*, #661 *Fletchling*, #662 *Fletchinder*, #663 *Talonflame*, #666 *Vivillon*, #701 *Hawlucha*, #714 *Noibat*, #715 *Noivern*, #717 *Yveltal*, #722 *Rowlet*, #723 *Dartrix*, #731 *Pikipek*, #732 *Trumbeak*, #733 *Toucannon*, #741 *Oricorio*, #764 *Comfey*, #774 *Minior*, #797 *Celesteela*
  * **Ghost**-type from #724 *Decidueye*
  * **Ground**-type from #074 *Geodude*, #075 *Graveler*, #076 *Golem*, #246 *Larvitar*, #247 *Pupitar*
  * **Normal**-type from #016 *Pidgey*, #017 *Pidgeotto*, #018 *Pidgeot*, #021 *Spearow*, #022 *Fearow*, #039 *Jigglypuff*, #040 *Wigglytuff*, #083 *Farfetch'd*, #084 *Doduo*, #085 *Dodrio*, #163 *Hoothoot*, #164 *Noctowl*, #174 *Igglybuff*, #276 *Taillow*, #277 *Swellow*, #333 *Swablu*, #351 *Castform*, #396 *Starly*, #397 *Staravia*, #398 *Staraptor*, #441 *Chatot*, #519 *Pidove*, #520 *Tranquil*, #521 *Unfezant*, #627 *Rufflet*, #628 *Braviary*, #661 *Fletchling*, #694 *Helioptile*, #695 *Heliolisk*, #731 *Pikipek*, #732 *Trumbeak*, #733 *Toucannon*
  * **Poison**-type from #092 *Gastly*, #093 *Hanuter*, #094 *Gengar*
  * **Psychic**-type from #386 *Deoxys* (making it typeless), #789 *Cosmog*, #790 *Cosmoem*, #791 *Solgaleo*, #792 *Lunala*, #800 *Necrozma*
  * **Steel**-type from #395 *Empoleon*
* added:
  * **Air**-type to #109 *Koffing*, #110 *Weezing*, #176 *Togetic*, #187 *Hoppip*, #188 *Skiploom*, #189 *Jumpluff*, #284 *Masquerain*, #333 *Swablu*, #334 *Altaria*, #351 *Castform*, #358 *Chimecho*, #380 *Latias*, #381 *Latios*, #384 *Rayquaza*, #425 *Drifloon*, #426 *Drifblim*, #468 *Togekiss*, #517 *Munna*, #518 *Musharna*, #587 *Emolga*, #642 *Tornadus*, #643 *Thundurus*, #645 *Landorus*, #764 *Comfey*, #774 *Minior*, #789 *Cosmog*, #797 *Celesteela*
  * **Bat**-type to #041 *Zubat*, #042 *Golbat*, #169 *Crobat*, #207 *Gligar*, #472 *Gliscor*, #527 *Woobat*, #528 *Swoobat*, #714 *Noibat*, #715 *Noivern*
  * **Bird**-type to #016 *Pidgey*, #017 *Pidgeotto*, #018 *Pidgeot*, #021 *Spearow*, #022 *Fearow*, #054 *Psyduck*, #055 *Golduck*, #083 *Farfetch'd*, #084 *Doduo*, #085 *Dodrio*, #144 *Articuno*, #145 *Zapdos*, #146 *Moltres*, #163 *Hoothoot*, #164 *Noctowl*, #177 *Natu*, #178 *Xatu*, #198 *Murkrow*, #225 *Delibird*, #227 *Skarmory*, #249 *Lugia*, #250 *Ho-Oh*, #255 *Torchic*, #256 Combusken*, #257 *Blaziken*, #276 *Taillow*, #277 *Swellow*, #278 *Wingull*, #279 *Pelipper*, #333 *Swablu*, #334 *Altaria*, #393 *Piplup*, #394 *Prinplup*, #395 *Empoleon*, #396 *Starly*, #397 *Staravia*, #398 *Staraptor*, #430 *Honchkrow*, #441 *Chatot*, #519 *Pidove*, #520 *Tranquil*, #521 *Unfezant*, #561 *Sigilyph*, #566 *Archen*, #567 *Archeops*, #580 *Ducklett*, #581 *Swanna*, #627 *Rufflet*, #628 *Braviary*, #629 *Vullaby*, #630 *Mandibuzz*, #661 *Fletchling*, #662 *Fletchinder*, #663 *Talonflame*, #682 *Spritzee*, #683 *Aromatisse*, #701 *Hawlucha*, #717 *Yveltal*, #722 *Rowlet*, #723 *Dartrix*, #724 *Decidueye*, #731 *Pikipek*, #732 *Trumbeak*, #733 *Toucannon*, #741 *Oricorio*
  * **Bug**-type to #098 *Krabby*, #099 *Kingler*, #140 *Kabuto*, #141 *Kabutops*, #341 *Corphish*, #342 *Crawdaunt*, #328 *Trapinch*, #329 *Vibrava*, #330 *Flygon*, #452 *Drapion*, #692 *Clauncher*, #693 *Clawitzer*, #739 *Crabrawler*, #740 *Crabominable*
  * **Dragon**-type to #006 *Charizard*, #116 *Horsea*, #117 *Seadra*, #130 *Gyarados*, #142 *Aerodactyl*, #193 *Yanma*, #246 *Larvitar*, #246 *Pupitar*, #248 *Tyranitar*, #350 *Milotic*, #357 *Tropius*, #469 *Yanmega*, #690 *Skrelp*
  * **Fighting**-type to #127 *Pinsir*
  * **Fire**-type to #661 *Fletchling*
  * **Fish**-type to #116 *Horsea*, #117 *Seadra*, #118 *Goldeen*, #119 *Seaking*, #129 *Magikarp*, #130 *Gyarados*, #170 *Chinchou*, #171 *Lanturn*, #211 *Qwilfish*, #223 *Remoraid*, #226 *Mantine*, #230 *Kingdra*, #318 *Carvanha*, #319 *Sharpedo*, #339 *Barboach*, #340 *Whiscash*, #349 *Feebas*, #350 *Milotic*, #367 *Huntail*, #368 *Gorebyss*, #369 *Relicanth*, #370 *Luvdisc*, #456 *Finneon*, #457 *Lumineon*, #458 *Mantyke*, #550 *Basculin*, #594 *Alomomola*, #602 *Tynamo*, #603 *Eelektrik*, #604 *Eelektross*, #618 *Stunfisk*, #690 *Skrelp*, #691 *Dragalge*, #746 *Wishiwashi*, #771 *Pyukumuku*, #779 *Bruxish*
  * **Light**-type to #250 *Ho-Oh*, #488 *Cresselia*, #789 *Cosmog*, #790 *Cosmoem*, #791 *Solgaleo*, #792 *Lunala*, #800 *Necrozma*
  * **Normal**-type to #077 *Ponyta*, #078 *Rapidash*, #179 *Mareep*, #180 *Flaaffy*, #181 *Ampharos*, #209 *Snubbull*, #210 *Granbull*, #231 *Phanpy*, #232 *Donphan*, #325 *Spoink*, #326 *Grumpig*, #613 *Cubchoo*, #614 *Beartic*, #674 *Pancham*, #675 *Pangoro*, #716 *Xerneas*, #744 *Rockruff*, #745 *Lycanroc*, #749 *Mudbray*, #750 *Mudsdale*
  * **Rock**-type to #790 *Cosmoem*
  * **Water**-type to #249 *Lugia*, #691 *Dragalge*, #704 *Goomy*, #705 *Sliggoo*, #706 *Goodra*
<!-- , # ** -->

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)


### Items
* medicine:
  * non-volatile status conditions:
    * 50 **Awakening**: cures sleep
    * 100 **Antidote**: cures poison
    * 150 **Paralyse Heal**: cures paralysis
    * 200 **Burn Heal**: cures burn
    * 250 **Ice Heal**: cures frozen
    * 500 **Full Heal**: cures sleep, poison, paralysis, burn, freeze, and confusion
  * HP:
    * 300 **Tiny Potion** (*Potion*): heals 30 HP
    * 700 **Small Potion** (*Super Potion*): heals 60 HP
    * 1200 **Medium Potion** (*new*): heals 120 HP
    * 1800 **Large Potion** (*Hyper Potion*): heals 240 HP
    * 2400 **Huge Potion** (*Max Potion*): heals 480 HP
    * 3000 **Full Restore**: heals all HP and cures sleep, poison, paralysis, burn, freeze, and confusion
  * PP: 
    * 400 **Tiny Energy Bar** (*new*): restores the PP of one move by 20% of default PP
    * 700 **Small Energy Bar** (*new*): restores the PP of one move by 40% of default PP
    * 1000 **Medium Energy Bar** (*new*): restores the PP of one move by 60% of default PP
    * 1300 **Large Energy Bar** (*new*): restores the PP of one move by 80% of default PP
    * 1600 **Huge Energy Bar** (*new*): restores the PP of one move by 100% of default PP
    * 1200 **Ether**: restores 10 PP of one move
    * 2000 **Max Ether**: fully restores the PP of a selected move
    * 3000 **Elixir**: restores 10 PP to each move
    * 4500 **Max Elixir**: fully restores the PP of a Pokémon's moves
* battle items:
  * single-use consumables:
    * 1000 **Smoke Ball** (*Fluffy Tail*, *Poké Doll*, *Poké Toy*): ends a battle with a wild Pokémon
    * 500 **X Ph. Attack**: raises the physical attack of a Pokémon currently in battle by two stages
    * 550 **X Ph. Defence**: raises the physical defence of a Pokémon currently in battle by two stages
    * 350 **X Sp. Attack**: raises the special attack of a Pokémon currently in battle by two stages
    * 350 **X Sp. Defence**: raises the special defence of a Pokémon currently in battle by two stages
    * 350 **X Speed**: raises the combat speed of a Pokémon currently in battle by two stages
    * 950 **X Accuracy**: raises the accuracy of a Pokémon currently in battle by two stages
    * 650 **X Critical** (*Dire Hit*): raises the critical hit ratio of a Pokémon currently in battle by two stages
    * 700 **X Guard** (*Guard Spec.*): prevents stat reduction by opponents' moves for the user's party for five turns
  * repeated-use:
    * **Blue Flute**: wakes a sleeping Pokémon
    * **Green Flute** (*new*): snaps a Pokémon out of a taunt
    * **Red Flute**: snaps a Pokémon out of infatuation
    * **Yellow Flute**: snaps a Pokémon out of confusion
* miscellaneous:
  * repels:
    * 200 **Tiny Repel** (*new*): no lower-level wild Pokémon for 50 steps
    * 350 **Small Repel** (*Repel*): no lower-level wild Pokémon for 100 steps
    * 500 **Medium Repel** (*new*): no lower-level wild Pokémon for 150 steps
    * 650 **Large Repel** (*Super Repel*): no lower-level wild Pokémon for 200 steps
    * 800 **Huge Repel** (*Max Repel*): no lower-level wild Pokémon for 250 steps
  * mulch:

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

#### Department Stores
Department stores sell the following items:
  * adventure counter: **Poké Ball**, **Great Ball**, **Ultra Ball**, **Tiny Repel**, **Small Repel**, **Medium Repel**, **Large Repel**, **Huge Repel**, **Smoke Ball**
  * medicine counter: **Awakening**, **Antidote**, **Paralyse Heal**, **Burn Heal**, **Ice Heal**, **Full Heal**, **Tiny Potion**, **Small Potion**, **Medium Potion**, **Large Potion**, **Huge Potion**, **Full Restore**, **Tiny Energy Bar**, **Small Energy Bar**, **Medium Energy Bar**, **Large Energy Bar**, **Huge Energy Bar**
  * battle counter: **X Ph. Attack**, **X Ph. Defence**, **X Sp. Attack**, **X Sp. Defence**, **X Speed**, **X Accuracy**, **X Critical**, **X Guard**
  * vitamin counter: **PP Up**, **HP Up**, **Protein**, **Iron**, **Calcium**, **Zinc**, **Carbos**
  * evolution counter: **Dawn Stone**, **Dusk Stone**, **Fire Stone**, **Ice Stone**, **Leaf Stone**, **Magnetic Stone** (*new*), **Moon Stone**, **Oval Stone**, **Shiny Stone**, **Sun Stone**, **Thunder Stone**, **Water Stone**
  * mulch counter:

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

#### Marts
Poké-marts are now a separate counter present in every Poké-centre (instead of a separate building)
  * available at game start: **Poké Ball**, **Awakening**, **Antidote**, **Paralyse Heal**, **Burn Heal**, **Ice Heal**, **Tiny Potion**, **Tiny Energy Bar**, **Tiny Repel**, **Smoke Ball**
  * added after acquiring a certain number of gym badges: **Small Potion** (1), **Small Energy Bar** (2), **Small Repel** (3), **Great Ball** (4), **Medium Potion** (5), **Medium Energy Bar**(6), **Medium Repel** (7), **Full Heal** (8), **Large Potion** (9), **Large Energy Bar** (10), **Large Repel** (11), **Ultra Ball** (12), **Huge Potion** (13), **Huge Energy Bar** (14), **Huge Repel** (15), **Full Restore** (16), **X Ph. Attack** (17), **X Ph. Defence** (18), **X Sp. Attack** (19), **X Sp. Defence** (20), **X Speed** (21), **X Accuracy** (22), **X Critical** (23), **X Guard** (24)

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
* individual Pokémon stats are calculated differently:
  * HP: `floor(2 × base × (0.85 + IV / 100) × (level + 10) / 110) + AV + level + 10`
  * other stats: `floor((2 × base × (0.85 + IV / 100) + badges) × (level + 10) / 110) + AV`
  * for comparison the official formulae:
    * “Let's Go, Pikachu/Eevee!” HP: `floor((2 × base + IV) × level / 100) + AV + level + 10`
    * “Let's Go, Pikachu/Eevee!” other stats: `floor(((2 × base + IV) × level / 100 + 5) × nature × friendship) + AV`
    * generation III to VII HP: `floor((2 × base + IV + floor(EV / 4)) × level / 100) + level + 10`
    * generation III to VII other stats: `floor((floor((2 × base + IV + floor(EV / 4)) × level / 100 ) + 5) × nature)`
    * generation I and II HP: `floor((2 × (base + IV) + floor(sqrt(EV) / 4)) × level / 100) + level + 10`
    * generation I and II other stats: `floor((2 × (base + IV) + floor(sqrt(EV) / 4)) × level / 100 ) + 5`
  * legenda:
    * `base`: Pokémon species base stat
    * `IV`: individual value, a random number from 0 to 31 for each stat
    * `EV`: effort values, gained by defeating other Pokémon; maximum is 255 for a stat and a total of 510 for a Pokémon
    * `AV`: added/awakening values, gained from using certain items
    * `badges`: the number of badges a player has acquired by defeating gym leaders
    * `friendship`: a bonus between 0 (for a Pokémon with 0 friendship) to +10% (for a Pokémon with 255 friendship)
    * `level`: current level of the Pokémon
    * `nature`: either 0 change, +10%, or −10%
  * changes:
    * stats scale with `(level + 10) / 110` (instead of `level / 100`), which makes a significant difference for lower levels, e.g. 
      * at level 1 stats are 10% (instead of 1%)
      * at level 5 stats are 13.6% (instead of 5%)
      * at level 12 stats are 20% (instead of 12%)
      * at level 23 stats are 30% (instead of 23%)
      * at level 34 stats are 40% (instead of 34%)
      * at level 45 stats are 50% (instead of 45%)
      * at level 100 stats are 100% (as they were)
    * `IV` are now a multiplier (from −15% to +16%) instead of an addition
    * `EV`, `friendship`, and `nature` are no longer used (wings (+1 `EV` each) and friendship-berries have no longer any effect)
    * `AV`:
      * no longer increased by leveling up; theoretically no maximum, in practice 
      * vitamins (HP Up, Protein, Iron, Calcium, Zinc, Carbos) now grant +1 `AV` instead of +10 `EV` (similar to candies in “Let's Go, Pikachu/Eevee!”)
      * the *total* number of vitamins you can use on a Pokémon is determined by its level, e.g. +10 HP for a level 10 Pokémon, or +25 PA, PD, SA, SD each for a level 100 Pokémon (instead of 50 candies *for each stat* for a Pokémon under level 30, 100 between level 30 and 60, 200 above level 60)
      * can also be used to give specific story-line Pokémon higher-than-normally-possible stats
    * `badges` slightly improve other stats, but not HP
* simplified sex ratios for realism:
  1. 50% female, 50% male (default)
  1. 100% female
  1. 100% male
  1. 100% neuter
* one-hit knock-out moves (Fissure, Guillotine, Horn Drill, Sheer Cold) and self-destruct moves (Explosion, Final Gambit, Healing Wish, Memento, Self-Destruct) can no longer be learned
* game is automatically saved whenever you enter a Poké-centre (you can still save at any other idle moment)
* you can no longer store items at the computer

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

<!--
* Poké-centres contain:
  * a nurse, Chansey, and healing machine to fully heal your Pokémon
  * a computer to change Pokémon
  * a Poké-mart to purchase ordinary items
  * an Alakazam to teleport you to any other Poké-centre you've visited before (Dig, Fly, Teleport no longer work outside of battles)
  * various NPCs to talk to

 ×···×       #####
 ··A··       ··S··
 ·····       =====
 ····· **·## ·····
 ×···× **NC· ·····
   ·   =====   ·
 P···············P
 ··++++·····++++··
 ·+[][]+···+[][]+·
 ·+[][]+···+[][]+·
 ··++++·····++++··
 ×······|||······×

| entrance, exit
· walking space
\/ corners
+ chair
[] table
× plant
= counter
# shelves
* healing machine
A Alakazam (teleport)
C Chansey
E escalator
N nurse
P computer
S shopkeeper
V vending machine

 /×##=**N#=P··\  
 ·++·======····  /·=···####\
 ··············  .S=·······×
 ··············  ===···##··#
 E·········+[]·  ······##··#
 ··········+[]·  ······##··#
 \·····||···++/  \··||·····/

-->

