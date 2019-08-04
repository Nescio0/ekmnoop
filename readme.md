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
  * **Bat**:
    * super-effective vs **Fighting**, **Psychic**
    * not very effective vs **Ghost**, **Rock**
    * no effect vs **Steel**
  * **Bird**:
    * super-effective vs **Bug**
    * not very effective vs **Rock**, **Steel**
* Effectiviness changes of existing types:
  * **Bug** is not very effective vs **Bird** (new)
  * **Electric** is normally effective vs **Dragon** (instead of not very effective)
  * **Electric** is super-effective vs **Steel** (instead of normally effective)
  * **Fairy** is normally effective vs **Fire** (instead of not very effective)
  * **Fairy** is not very effective vs **Grass** (instead of normally effective)
  * **Fairy** has no effect vs **Psychic** (instead of normally effective)
  * **Fire** is super-effective vs **Bat** (new)
  * **Fighting** is normally effective vs **Bug** (instead of not very effective)
  * **Ghost** is not very effective vs **Bat** (new)
  * **Grass** is not very effective vs **Bird** (new)
  * **Ground** is not very effective vs **Dragon** (instead of normally effective)
  * **Ice** is super-effective vs **Bat** (new)
  * **Ice** is super-effective vs **Fire** (instead of not very effective)
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
* Add new types: **Fish**, **Light**.
* Rename **Ground** to **Earth**, **Steel** to **Metal**.

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)


### Moves
* New moves:
* Accuracy changes:
* Base power changes:
* PP changes:
  * from 5 to 10: Ancient Power
* Type changes:
  * **Air** instead of **Dragon**: Twister
  * **Air** instead of **Flying**: Aerial Ace, Aeroblast, Air Cutter, Air Slash, Bounce, Defog, Floaty Fall, Fly, Gust, Hurricane, Sky Attack, Supersonic Skystrike, Tail Wind
  * **Air** instead of **Normal**: Sonic Boom, Supersonic, Weather Ball, Whirlwind
  * **Bat** instead of **Bug**: Leech Life
  * **Bird** instead of **Flying**: Beak Blast, Brave Bird, Chatter, Drill Peck, Feather Dance, Oblivion Wing, Peck, Pluck, Roost, Sky Drop, Wing Attack
  * **Dragon** instead of **Flying**: Dragon Ascent
  * **Grass** instead of **Poison**: Poison Powder
  * **Ground** instead of **Rock**: Sandstorm
  * **Normal** instead of **Flying**: Acrobatics, Mirror Move
* Other changes:

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)


### Pokemon

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

#### Pokemon evolution
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
    * #790 *Cosmoem* into #792 *Lunala* (instead of at level 53)
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
    * #790 *Cosmoem* into #791 *Solgaleo* (instead of at level 53)
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

#### Pokemon stats
* Mythical:
  * #493 *Arceus* +30 HP, +5 PA, +5 PD, +5 SA, +5 SD, -20 CS | total from 720 to 750
* Legendary:
  * #144 *Articuno* +30 SA, -30 SD | total at 580
  * #150 *Mewtwo* +5 HP, +1 PA, -1 PD, +1 SA, -1 SD, -19 CS | total from 680 to 666
  * #249 *Lugia* +2 HP, -4 SD | total from 680 to 678
  * #250 *Ho-Oh* +2 HP, -4 SD | total from 680 to 678
  * #380 *Latias* +30 CS | total from 600 to 630
  * #381 *Latios* +30 CS | total from 600 to 630
  * #382 *Kyogre* +8 HP, +10 SA | total from 660 to 678
  * #383 *Groudon* +8 HP, +10 PA | total from 660 to 678
  * #384 *Rayquaza* +3 HP, -5 PA, -5 SA, +5 CS | total from 680 to 678
  * #483 *Dialga* -1 HP, -1 SD | total from 680 to 678
  * #484 *Palkia* -1 PD, -1 CS | total from 680 to 678
  * #485 *Heatran* +5 HP, +5 PA, +5 PD, +5 SA, +5 SD, +5 CS | total from 600 to 630
  * #486 *Regigigas* +10 HP, -20 CS | total from 670 to 660
  * #487 *Giratina* -1 PA, -1 SA | total from 680 to 678
  * #643 *Reshiram* -1 HP, -1 PD | total from 680 to 678
  * #644 *Zekrom* -1 HP, -1 SD | total from 680 to 678
  * #716 *Xerneas* -3 HP, -3 SD, +4 CS | total from 680 to 678
  * #717 *Yveltal* -3 HP, -3 SD, +4 CS | total from 680 to 678
  * #791 *Solgaleo* -1 HP, -1 PA | total from 680 to 678
  * #792 *Lunala* -1 HP, -1 SA | total from 680 to 678
* Fossil:
* Starter:
* Other:

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

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

#### Pokemon types
* added **Air**-type to #109 *Koffing*, #110 *Weezing*, #176 *Togetic*, #187 *Hoppip*, #188 *Skiploom*, #189 *Jumpluff*, #284 *Masquerain*, #333 *Swablu*, #334 *Altaria*, #351 *Castform*, #358 *Chimecho*, #380 *Latias*, #381 *Latios*, #384 *Rayquaza*, #425 *Drifloon*, #426 *Drifblim*, #468 *Togekiss*, #587 *Emolga*, #642 *Tornadus*, #643 *Thundurus*, #645 *Landorus*, #764 *Comfey*, #774 *Minior*, #797 *Celesteela*
* added **Bat**-type to #041 *Zubat*, #042 *Golbat*, #169 *Crobat*, #207 *Gligar*, #472 *Gliscor*, #527 *Woobat*, #528 *Swoobat*, #714 *Noibat*, #715 *Noivern*
* added **Bird**-type to #016 *Pidgey*, #017 *Pidgeotto*, #018 *Pidgeot*, #021 *Spearow*, #022 *Fearow*, #054 *Psyduck*, #055 *Golduck*, #083 *Farfetch'd*, #084 *Doduo*, #085 *Dodrio*, #144 *Articuno*, #145 *Zapdos*, #146 *Moltres*, #163 *Hoothoot*, #164 *Noctowl*, #177 *Natu*, #178 *Xatu*, #198 *Murkrow*, #225 *Delibird*, #227 *Skarmory*, #249 *Lugia*, #250 *Ho-Oh*, #255 *Torchic*, #256 Combusken*, #257 *Blaziken*, #276 *Taillow*, #277 *Swellow*, #278 *Wingull*, #279 *Pelipper*, #333 *Swablu*, #334 *Altaria*, #393 *Piplup*, #394 *Prinplup*, #395 *Empoleon*, #396 *Starly*, #397 *Staravia*, #398 *Staraptor*, #430 *Honchkrow*, #441 *Chatot*, #519 *Pidove*, #520 *Tranquil*, #521 *Unfezant*, #561 *Sigilyph*, #566 *Archen*, #567 *Archeops*, #580 *Ducklett*, #581 *Swanna*, #627 *Rufflet*, #628 *Braviary*, #629 *Vullaby*, #630 *Mandibuzz*, #661 *Fletchling*, #662 *Fletchinder*, #663 *Talonflame*, #682 *Spritzee*, #683 *Aromatisse*, #701 *Hawlucha*, #717 *Yveltal*, #722 *Rowlet*, #723 *Dartrix*, #724 *Decidueye*, #731 *Pikipek*, #732 *Trumbeak*, #733 *Toucannon*, #741 *Oricorio*
* added **Bug**-type to #098 *Krabby*, #099 *Kingler*, #140 *Kabuto*, #141 *Kabutops*, #341 *Corphish*, #342 *Crawdaunt*, #328 *Trapinch*, #329 *Vibrava*, #330 *Flygon*, #452 *Drapion*, #692 *Clauncher*, #693 *Clawitzer*, #739 *Crabrawler*, #740 *Crabominable*
* removed **Dark**-type from #248 *Tyranitar*
* added **Dragon**-type to #006 *Charizard*, #116 *Horsea*, #117 *Seadra*, #130 *Gyarados*, #142 *Aerodactyl*, #193 *Yanma*, #246 *Larvitar*, #246 *Pupitar*, #248 *Tyranitar*, #350 *Milotic*, #357 *Tropius*, #469 *Yanmega*, #690 *Skrelp*
* added **Fighting**-type to #127 *Pinsir*
* added **Fire**-type to #661 *Fletchling*
* added **Fish**-type to 
* removed **Flying**-type from #006 *Charizard*, #012 *Butterfree*, #016 *Pidgey*, #017 *Pidgeotto*, #018 *Pidgeot*, #021 *Spearow*, #022 *Fearow*, #041 *Zubat*, #042 *Golbat*, #083 *Farfetch'd*, #084 *Doduo*, #085 *Dodrio*, #123 *Scyther*, #130 *Gyarados*, #142 *Aerodactyl*, #144 *Articuno*, #145 *Zapdos*, #146 *Moltres*, #149 *Dragonite*, #163 *Hoothoot*, #164 *Noctowl*, #165 *Ledyba*, #166 *Ledian*, #169 *Crobat*, #176 *Togetic*, #177 *Natu*, #178 *Xatu*, #187 *Hoppip*, #188 *Skiploom*, #189 *Jumpluff*, #193 *Yanma*, #198 *Murkrow*, #207 *Gligar*, #225 *Delibird*, #226 *Mantine*, #227 *Skarmory*, #249 *Lugia*, #250 *Ho-Oh*, #267 *Beautifly*, #276 *Taillow*, #277 *Swellow*, #278 *Wingull*, #279 *Pelipper*, #284 *Masquerain*, #291 *Ninjask*, #333 *Swablu*, #334 *Altaria*, #351 *Castform*, #357 *Tropius*, #358 *Chimecho*, #373 *Salamence*, #384 *Rayquaza*, #396 *Starly*, #397 *Staravia*, #398 *Staraptor*, #414 *Mothim*, #415 *Combee*, #416 *Vespiqueen*, #425 *Drifloon*, #426 *Drifblim*, #430 *Honchkrow*, #441 *Chatot*, #458 *Mantyke*, #468 *Togekiss*, #469 *Yanmega*, #472 *Gliscor*, #519 *Pidove*, #520 *Tranquil*, #521 *Unfezant*, #527 *Woobat*, #528 *Swoobat*, #561 *Sigilyph*, #566 *Archen*, #567 *Archeops*, #580 *Ducklett*, #581 *Swanna*, #587 *Emolga*, #627 *Rufflet*, #628 *Braviary*, #629 *Vullaby*, #630 *Mandibuzz*, #642 *Tornadus*, #643 *Thundurus*, #645 *Landorus*, #661 *Fletchling*, #662 *Fletchinder*, #663 *Talonflame*, #666 *Vivillon*, #701 *Hawlucha*, #714 *Noibat*, #715 *Noivern*, #717 *Yveltal*, #722 *Rowlet*, #723 *Dartrix*, #731 *Pikipek*, #732 *Trumbeak*, #733 *Toucannon*, #741 *Oricorio*, #764 *Comfey*, #774 *Minior*, #797 *Celesteela*
* removed **Steel**-type from #724 *Decidueye*
* removed **Ground**-type from #074 *Geodude*, #075 *Graveler*, #076 *Golem*, #246 *Larvitar*, #247 *Pupitar*
* added **Light**-type to 
* added **Normal**-type to #077 *Ponyta*, #078 *Rapidash*, #179 *Mareep*, #180 *Flaaffy*, #181 *Ampharos*, #209 *Snubbull*, #210 *Granbull*, #231 *Phanpy*, #232 *Donphan*, #325 *Spoink*, #326 *Grumpig*, #716 *Xerneas*, #744 *Rockruff*, #745 *Lycanroc*
* removed **Normal**-type from #016 *Pidgey*, #017 *Pidgeotto*, #018 *Pidgeot*, #021 *Spearow*, #022 *Fearow*, #039 *Jigglypuff*, #040 *Wigglytuff*, #083 *Farfetch'd*, #084 *Doduo*, #085 *Dodrio*, #163 *Hoothoot*, #164 *Noctowl*, #174 *Igglybuff*, #276 *Taillow*, #277 *Swellow*, #333 *Swablu*, #351 *Castform*, #396 *Starly*, #397 *Staravia*, #398 *Staraptor*, #441 *Chatot*, #519 *Pidove*, #520 *Tranquil*, #521 *Unfezant*, #627 *Rufflet*, #628 *Braviary*, #661 *Fletchling*, #694 *Helioptile*, #695 *Heliolisk*, #731 *Pikipek*, #732 *Trumbeak*, #733 *Toucannon*
* removed **Psychic**-type from #386 *Deoxys* (making it typeless)
* removed **Steel**-type from #395 *Empoleon*
* added **Water**-type to #249 *Lugia*, #691 *Dragalge*, #704 *Goomy*, #705 *Sliggoo*, #706 *Goodra*
<!-- , # ** -->

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)


### Items

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

[(return to table of contents)](https://github.com/ekmnoop/myshowdownmod#table-of-contents)

