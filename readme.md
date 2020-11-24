# ekmnoop mod
This is currently a mod for [Pokémon Showdown](https://github.com/Zarel/Pokemon-Showdown), a free and open source Pokémon battle simulator. For more detailed information, see the **changes.pdf** file.



## Table of contents
* [Terminology](https://github.com/Nescio0/ekmnoop#terminology)
* [Data changes](https://github.com/Nescio0/ekmnoop#data-changes)
  * [Types](https://github.com/Nescio0/ekmnoop#types)
  * [Moves](https://github.com/Nescio0/ekmnoop#moves)
  * [Pokemon](https://github.com/Nescio0/ekmnoop#pokemon)
    * [Pokemon evolution](https://github.com/Nescio0/ekmnoop#pokemon-evolution)
    * [Pokemon stats](https://github.com/Nescio0/ekmnoop#pokemon-stats)
* [Desired gameplay mechanics](https://github.com/Nescio0/ekmnoop#desired-gameplay-mechanics)



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

[(return to table of contents)](https://github.com/Nescio0/ekmnoop#table-of-contents)



## Data changes

[(return to table of contents)](https://github.com/Nescio0/ekmnoop#table-of-contents)

### Types
* Deprecated:
  * **Flying**
* New types:
  * **Air**:
    * super-effective vs **Bat**
    * not very effective vs **Bug**, **Dragon**, **Rock**
  * **Bat**:
    * super-effective vs **Dark**, **Fighting**, **Psychic**
    * not very effective vs **Ghost**, **Rock**
    * no effect vs **Steel**
  * **Bird**:
    * super-effective vs **Bug**, **Fighting**
    * not very effective vs **Electric**, **Rock**, **Steel**
  * **Fish**:
  * **Light**:
    * super-effective vs **Bat**, **Dark**, **Ghost**
    * not very effective vs **Fire**, **Grass**, **Steel**
* Effectiviness changes of existing types:
  * **Bug** is not very effective vs **Bird** (new)
  * **Dark** is not very effective vs **Light** (new)
  * **Electric** is not very effective vs **Air** (new)
  * **Electric** is super-effective vs **Bird** (new)
  * **Electric** is normally effective vs **Dragon** (instead of not very effective)
  * **Electric** is super-effective vs **Steel** (instead of normally effective)
  * **Fairy** is normally effective vs **Fire** (instead of not very effective)
  * **Fairy** is not very effective vs **Grass** (instead of normally effective)
  * **Fairy** has no effect vs **Psychic** (instead of normally effective)
  * **Fighting** is not very effective vs **Bird** (new)
  * **Ghost** is not very effective vs **Bat** (new)
  * **Ghost** is not very effective vs **Light** (new)
  * **Grass** is not very effective vs **Bird** (new)
  * **Ground** has no effect vs **Bat** (new)
  * **Ground** has no effect vs **Bird** (new)
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

[(return to table of contents)](https://github.com/Nescio0/ekmnoop#table-of-contents)


### Moves
* New moves:
* Accuracy changes:
* Base power changes:
  * decreased:
    * from 75 to 80: Drain Punch
  * increased:
    * from 20 to 40: Absorb
    * from 40 to 60: Mega Drain
    * from 75 to 80: Giga Drain
* PP changes:
  * decreased:
    * from 15 to 10: Dream Eater
    * from 25 to 20: Absorb
    * from 30 to 20: Light Screen
  * increased:
    * from 5 to 10: Ancient Power, Ominous Wind, Silver Wind
    * from 5 to 10: Moonlight, Morning Sun, Synthesis
* Type changes:
  * **Air** instead of **Dragon**: Twister
  * **Air** instead of **Flying**: Aerial Ace, Aeroblast, Air Cutter, Air Slash, Bounce, Chatter, Defog, Floaty Fall, Fly, G-Max Wind Rage, Gust, Hurricane, Max Airstream, Sky Attack, Supersonic Skystrike, Tailwind
  * **Air** instead of **Normal**: Boomburst, Echoed Voice, Growl, Howl, Hyper Voice, Noble Roar, Perish Song, Relic Song, Roar, Round, Screech, Sing, Snore, Sonic Boom, Supersonic, Uproar, Weather Ball, Whirlwind
  * **Bat** instead of **Bug**: Leech Life
  * **Bird** instead of **Flying**: Beak Blast, Brave Bird, Drill Peck, Feather Dance, Oblivion Wing, Peck, Pluck, Roost, Sky Drop, Wing Attack
  * **Dragon** instead of **Flying**: Dragon Ascent
  * **Grass** instead of **Poison**: Poison Powder
  * **Ground** instead of **Rock**: Sandstorm
  * **Light** instead of **Bug**: Signal Beam
  * **Light** instead of **Fairy**: Light of Ruin
  * **Light** instead of **Fire**: Sunny Day
  * **Light** instead of **Ghost**: Confuse Ray
  * **Light** instead of **Grass**: Solar Beam, Solar Blade
  * **Light** instead of **Normal**: Double Team, Flash, Laser Focus, Morning Sun, Simple Beam, Spotlight
  * **Light** instead of **Psychic**: Glitzy Glow, Light Screen, Light That Burns the Sky, Prismatic Laser, Reflect
  * **Light** instead of **Steel**: Flash Cannon
  * **Normal** instead of **Flying**: Acrobatics, Mirror Move
  * **Normal** instead of **Poison**: Coil
* Other changes:
  * added new `grounded` flag to Dig, Earthquake, Fissure, Magnitude, Rototiller, Spikes, Sticky Web, Toxic Spikes
* To do:
  * Lunar Dance:
    * (instead of fainting the user and fully restoring (HP, PP, status) the Pokémon switched in)
    * affects the user and all allied Pokémon
    * removes all stat changes, cures all status conditions, and heals by 1/4 of HP

<!--
Guard Split, Pain Split, Power Split

-->

[(return to table of contents)](https://github.com/Nescio0/ekmnoop#table-of-contents)


### Pokemon

[(return to table of contents)](https://github.com/Nescio0/ekmnoop#table-of-contents)

#### Pokemon evolution
All Pokémon can evolve without being traded and irrespective of happiness, specific location, or time
* exposed to an evolutionary stone:
  * **Dawn Stone**:
    * #133 *Eevee* into #196 *Espeon* (instead of leveled up with high friendship during the morning)
  * **Dusk Stone**:
    * #133 *Eevee* into #197 *Umbreon* (instead of leveled up with high friendship during the night)
  * **Ice Stone**:
    * #739 *Crabrawler* into #740 *Crabominable* (instead of leveled up at Mount Lanakila)
  * **Oval Stone**:
    * #113 *Chansey* into #242 *Blissey*
  * **Shiny Stone**:
    * #133 *Eevee* into #700 *Sylveon* (instead of leveled up with a *Fairy*-type move and two levels of Affection)
  * **Thunder Stone**:
    * #180 *Flaaffy* into #181 *Ampharos* (instead of at level 30)
  * **Water Stone**:
    * #183 *Marill* into #184 *Azumarill* (instead of at level 18)
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

[(return to table of contents)](https://github.com/Nescio0/ekmnoop#table-of-contents)



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

[(return to table of contents)](https://github.com/Nescio0/ekmnoop#table-of-contents)

