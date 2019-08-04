'use strict';

// @type {{[k: string]: ModdedTemplateData}}
let BattlePokedex = {
// Generation I – 151 Pokémon – #001 Bulbasaur to #151 Mew
	// #002
	ivysaur: {
		evoLevel: 20,
	},
	// #003
	venusaur: {
		evoLevel: 40,
	},
	// #005
	charmeleon: {
		evoLevel: 20,
	},
	// #006
	charizard: {
		types: ["Fire", "Dragon"],
		evoLevel: 40,
	},
	charizardmegay: {
		types: ["Fire", "Dragon"],
	},
	// #008
	wartortle: {
		evoLevel: 20,
	},
	// #009
	blastoise: {
		evoLevel: 40,
	},
	// #012
	butterfree: {
		types: ["Bug"],
	},
	// #025
	pikachu: {
		evoLevel: 10,
	},
	// #035
	clefairy: {
		evoLevel: 10,
	},
	// #039
	jigglypuff: {
		types: ["Fairy"],
		evoLevel: 10,
	},
	// #040
	wigglytuff: {
		types: ["Fairy"],
	},
	// #041
	zubat: {
		types: ["Bat", "Poison"],
	},
	// #042
	golbat: {
		types: ["Bat", "Poison"],
	},
	// #053
	persianalola: {
		evoLevel: 28,
	},
	// #064
	kadabra: {
		evoLevel: 25,
	},
	// #065
	alakazam: {
		evoLevel: 50,
	},
	// #067
	machoke: {
		evoLevel: 25,
	},
	// #068
	machamp: {
		evoLevel: 50,
	},
	// #074
	geodude: {
		types: ["Rock"],
	},
	// #075
	graveler: {
		types: ["Rock"],
	},
	// #076
	golem: {
		types: ["Rock"],
		evoLevel: 50,
	},
	golemalola: {
		evoLevel: 50,
	},
	// #077
	ponyta: {
		types: ["Fire", "Normal"],
	},
	// #078
	rapidash: {
		types: ["Fire", "Normal"],
		evoType: "stone",
		evoItem: "Fire Stone",
	},
	// #094
	gengar: {
		evoLevel: 50,
	},
	// #098
	krabby: {
		types: ["Water", "Bug"],
	},
	// #099
	kingler: {
		types: ["Water", "Bug"],
	},
	// #109
	koffing: {
		types: ["Poison", "Air"],
	},
	// #110
	weezing: {
		types: ["Poison", "Air"],
	},
	// #113
	chansey: {
		evoLevel: 10,
	},
	// #116
	horsea: {
		types: ["Water", "Dragon"],
	},
	// #117
	seadra: {
		types: ["Water", "Dragon"],
	},
	// #123
	scyther: {
		types: ["Bug"],
	},
	// #127
	pinsir: {
		types: ["Bug", "Fighting"],
	},
	pinsirmega: {
		types: ["Bug", "Fighting"],
	},
	// #130
	gyarados: {
		types: ["Water", "Dragon"],
		evoType: "levelHold",
		evoItem: "Dragon Scale",
	},
	// #140
	kabuto: {
		types: ["Water", "Rock", "Bug"],
	},
	// #141
	kabutops: {
		types: ["Water", "Rock", "Bug"],
	},
	// #142
	aerodactyl: {
		types: ["Dragon", "Rock"],
	},
	// #143
	snorlax: {
		evoLevel: 25,
	},
	// #144
	articuno: {
		baseStats: {hp: 90, atk: 85, def: 100, spa: 125, spd: 95, spe: 85},
	},
	// #149
	dragonite: {
		types: ["Dragon"],
	},
	// #150
	mewtwo: {
		baseStats: {hp: 111, atk: 111, def: 89, spa: 155, spd: 89, spe: 111},
	},
	mewtwomegax: {
		baseStats: {hp: 111, atk: 191, def: 99, spa: 155, spd: 99, spe: 111},
	},
	mewtwomegay: {
		baseStats: {hp: 111, atk: 151, def: 69, spa: 195, spd: 119, spe: 121},
	},
// Generation II – 100 Pokémon – #152 Chikorita to #251 Celebi
	// #153
	bayleef: {
		evoLevel: 20,
	},
	// #154
	meganium: {
		evoLevel: 40,
	},
	// #156
	quilava: {
		evoLevel: 20,
	},
	// #157
	typhlosion: {
		evoLevel: 40,
	},
	// #159
	croconaw: {
		evoLevel: 20,
	},
	// #160
	feraligatr: {
		evoLevel: 40,
	},
	// #165
	ledyba: {
		types: ["Bug"],
	},
	// #166
	ledian: {
		types: ["Bug"],
	},
	// #169
	crobat: {
		types: ["Bat", "Poison"],
		evoLevel: 44,
	},
	// #174
	igglybuff: {
		types: ["Fairy"],
	},
	// #176
	togetic: {
		types: ["Fairy", "Air"],
		evoLevel: 10,
	},
	// #179
	mareep: {
		types: ["Electric", "Normal"],
	},
	// #180
	flaaffy: {
		types: ["Electric", "Normal"],
	},
	// #181
	ampharos: {
		types: ["Electric", "Normal"],
		evoType: "stone",
		evoItem: "Thunder Stone",
	},
	// #183
	marill: {
		evoLevel: 10,
	},
	// #184
	azumarill: {
		evoType: "stone",
		evoItem: "Water Stone",
	},
	// #186
	politoed: {
		evoType: "levelHold",
		evoItem: "King's Rock",
	},
	// #187
	hoppip: {
		types: ["Grass", "Air"],
	},
	// #188
	skiploom: {
		types: ["Grass", "Air"],
	},
	// #189
	jumpluff: {
		types: ["Grass", "Air"],
	},
	// #193
	yanma: {
		types: ["Bug", "Dragon"],
	},
	// #196
	espeon: {
		evoType: "stone",
		evoItem: "Dawn Stone",
		evoCondition: "",
	},
	// #197
	umbreon: {
		evoType: "stone",
		evoItem: "Dusk Stone",
	},
	// #199
	slowking: {
		evoType: "levelHold",
		evoItem: "King's Rock",
	},
	// #207
	gligar: {
		types: ["Bat", "Ground"],
	},
	// #208
	steelix: {
		evoType: "levelHold",
		evoItem: "Metal Coat",
	},
	// #209
	snubbull: {
		types: ["Fairy", "Normal"],
	},
	// #210
	granbull: {
		types: ["Fairy", "Normal"],
	},
	// #212
	scizor: {
		evoType: "levelHold",
		evoItem: "Metal Coat",
	},
	// #226
	mantine: {
		types: ["Water"],
		evoLevel: 15,
	},
	// #230
	kingdra: {
		evoType: "levelHold",
		evoItem: "Dragon Scale",
	},
	// #231
	phanpy: {
		types: ["Ground", "Normal"],
	},
	// #232
	donphan: {
		types: ["Ground", "Normal"],
	},
	// #233
	porygon2: {
		evoType: "levelHold",
		evoItem: "Up-Grade",
	},
	// #242
	blissey: {
		evoType: "stone",
		evoItem: "Oval Stone",
	},
	// #246
	larvitar: {
		types: ["Rock", "Dragon"],
	},
	// #247
	pupitar: {
		types: ["Rock", "Dragon"],
	},
	// #248
	tyranitar: {
		types: ["Rock", "Dragon"],
	},
	// #249
	lugia: {
		baseStats: {hp: 108, atk: 90, def: 130, spa: 90, spd: 150, spe: 110},
	},
	// #250
	hooh: {
		baseStats: {hp: 108, atk: 130, def: 90, spa: 110, spd: 150, spe: 90},
	},
// Generation III – 135 Pokémon – #252 Treecko to #386 Deoxys
	// #253
	grovyle: {
		evoLevel: 20,
	},
	// #254
	sceptile: {
		evoLevel: 40,
	},
	// #256
	combusken: {
		evoLevel: 20,
	},
	// #257
	blaziken: {
		evoLevel: 40,
	},
	// #259
	marshtomp: {
		evoLevel: 20,
	},
	// #260
	swampert: {
		evoLevel: 40,
	},
	// #267
	beautifly: {
		types: ["Bug"],
	},
	// #284
	masquerain: {
		types: ["Bug", "Air"],
	},
	// #291
	ninjask: {
		types: ["Bug"],
	},
	// #301
	delcatty: {
		evoLevel: 21,
	},
	// #315
	roselia: {
		evoLevel: 10,
	},
	// #325
	spoink: {
		types: ["Psychic", "Normal"],
	},
	// #326
	grumpig: {
		types: ["Psychic", "Normal"],
	},
	// #328
	trapinch: {
		types: ["Bug", "Ground"],
	},
	// #329
	vibrava: {
		types: ["Bug", "Dragon", "Ground"],
	},
	// #330
	flygon: {
		types: ["Bug", "Dragon", "Ground"],
	},
	// #333
	swablu: {
		types: ["Air", "Flying"],
	},
	// #334
	altaria: {
		types: ["Air", "Dragon"],
	},
	// #341
	corphish: {
		types: ["Water", "Bug"],
	},
	// #342
	crawdaunt: {
		types: ["Water", "Bug", "Dark"],
	},
	// #350
	milotic: {
		types: ["Water", "Dragon"],
		evoType: "levelHold",
		evoItem: "Dragon Scale",
	},
	// #351
	castform: {
		types: ["Air"],
	},
	castformsunny: {
		types: ["Air", "Fire"],
	},
	castformrainy: {
		types: ["Air", "Water"],
	},
	castformsnowy: {
		types: ["Air", "Ice"],
	},
	// #357
	tropius: {
		types: ["Grass", "Dragon"],
	},
	// #358
	chimecho: {
		types: ["Psychic", "Air"],
	},
	// #373
	salamence: {
		types: ["Dragon"],
	},
	salamencemega: {
		types: ["Dragon"],
	},
	// #380
	latias: {
		types: ["Air", "Dragon", "Psychic"],
		baseStats: {hp: 80, atk: 80, def: 90, spa: 110, spd: 130, spe: 140},
	},
	latiasmega: {
		types: ["Air", "Dragon", "Psychic"],
		baseStats: {hp: 80, atk: 100, def: 120, spa: 140, spd: 150, spe: 140},
	},
	// #381
	latios: {
		types: ["Air", "Dragon", "Psychic"],
		baseStats: {hp: 80, atk: 90, def: 80, spa: 130, spd: 110, spe: 140},
	},
	latiosmega: {
		types: ["Air", "Dragon", "Psychic"],
		baseStats: {hp: 80, atk: 130, def: 100, spa: 160, spd: 120, spe: 140},
	},
	// #382
	kyogre: {
		baseStats: {hp: 108, atk: 100, def: 90, spa: 160, spd: 140, spe: 90},
	},
	kyogreprimal: {
		baseStats: {hp: 108, atk: 150, def: 90, spa: 190, spd: 160, spe: 90},
	},
	// #383
	groudon: {
		baseStats: {hp: 108, atk: 160, def: 140, spa: 100, spd: 90, spe: 90},
	},
	groudonprimal: {
		baseStats: {hp: 108, atk: 190, def: 160, spa: 150, spd: 90, spe: 90},
	},
	// #384
	rayquaza: {
		types: ["Dragon", "Air"],
		baseStats: {hp: 108, atk: 145, def: 90, spa: 145, spd: 90, spe: 100},
	},
	rayquazamega: {
		types: ["Dragon", "Air"],
		baseStats: {hp: 108, atk: 175, def: 100, spa: 175, spd: 100, spe: 120},
	},
	// #386
	deoxys: {
		types: [],
	},
	deoxysattack: {
		types: [],
	},
	deoxysdefense: {
		types: [],
	},
	deoxysspeed: {
		types: [],
	},
// Generation IV – 107 Pokémon – #387 Turtwig to #493 Arceus
	// #388
	grotle: {
		evoLevel: 20,
	},
	// #389
	torterra: {
		evoLevel: 40,
	},
	// #391
	monferno: {
		evoLevel: 20,
	},
	// #392
	infernape: {
		evoLevel: 40,
	},
	// #394
	prinplup: {
		evoLevel: 20,
	},
	// #395
	empoleon: {
		evoLevel: 40,
	},
	// #414
	mothim: {
		types: ["Bug"],
	},
	// #415
	combee: {
		types: ["Bug"],
	},
	// #416
	vespiqueen: {
		types: ["Bug"],
	},
	// #425
	drifloon: {
		types: ["Ghost", "Air"],
	},
	// #426
	drifblim: {
		types: ["Ghost", "Air"],
	},
	// #428
	lopunny: {
		evoLevel: 19,
	},
	// #433
	chingling: {
		evoLevel: 15,
	},
	// #448
	lucario: {
		evoLevel: 25,
	},
	// #452
	drapion: {
		types: ["Poison", "Bug", "Dark"],
	},
	// #458
	mantyke: {
		types: ["Water"],
	},
	// #462
	magnezone: {
		evoType: "stone",
		evoItem: "Magnetic Stone",
	},
	// #464
	rhyperior: {
		evoType: "levelHold",
		evoItem: "Protector",
	},
	// #466
	electivire: {
		evoType: "levelHold",
		evoItem: "Electirizer",
	},
	// #467
	magmortar: {
		evoType: "levelHold",
		evoItem: "Magmarizer",
	},
	// #468
	togekiss: {
		types: ["Fairy", "Air"],
	},
	// #469
	yanmega: {
		types: ["Bug", "Dragon"],
	},
	// #470
	leafeon: {
		evoType: "stone",
		evoItem: "Leaf Stone",
	},
	// #471
	glaceon: {
		evoType: "stone",
		evoItem: "Ice Stone",
	},
	// #472
	gliscor: {
		types: ["Bat", "Ground"],
	},
	// #474
	porygonz: {
		evoType: "levelHold",
		evoItem: "Dubious Disc",
	},
	// #476
	probopass: {
		evoType: "stone",
		evoItem: "Magnetic Stone",
	},
	// #477
	dusknoir: {
		evoType: "levelHold",
		evoItem: "Reaper Cloth",
	},
	// #483
	dialga: {
		baseStats: {hp: 99, atk: 120, def: 120, spa: 150, spd: 99, spe: 90},
	},
	// #484
	palkia: {
		baseStats: {hp: 90, atk: 120, def: 99, spa: 150, spd: 120, spe: 99},
	},
	// #485
	heatran: {
		baseStats: {hp: 96, atk: 95, def: 111, spa: 135, spd: 111, spe: 82},
	},
	// #486
	regigigas: {
		baseStats: {hp: 120, atk: 160, def: 110, spa: 80, spd: 110, spe: 80},
	},
	// #487
	giratina: {
		baseStats: {hp: 150, atk: 99, def: 120, spa: 99, spd: 120, spe: 90},
	},
	giratinaorigin: {
		baseStats: {hp: 150, atk: 120, def: 99, spa: 120, spd: 99, spe: 90},
	},
	// #493
	arceus: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceusbug: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceusdark: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceusdragon: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceuselectric: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceusfairy: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceusfighting: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceusfire: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceusflying: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceusghost: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceusgrass: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceusground: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceusice: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceuspoison: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceuspsychic: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceusrock: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceussteel: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
	arceuswater: {
		baseStats: {hp: 150, atk: 125, def: 125, spa: 125, spd: 125, spe: 100},
	},
// Generation V – 156 Pokémon – #494 Victini to #649 Genesect
	// #496
	servine: {
		evoLevel: 20,
	},
	// #497
	serperior: {
		evoLevel: 40,
	},
	// #499
	pignite: {
		evoLevel: 20,
	},
	// #500
	emboar: {
		evoLevel: 40,
	},
	// #502
	dewott: {
		evoLevel: 20,
	},
	// #503
	samurott: {
		evoLevel: 40,
	},
	// #526
	gigalith: {
		evoLevel: 50,
	},
	// #527
	woobat: {
		types: ["Bat", "Psychic"],
	},
	// #528
	swoobat: {
		types: ["Bat", "Psychic"],
		evoLevel: 25,
	},
	// #534
	conkeldurr: {
		evoLevel: 50,
	},
	// #542
	leavanny: {
		evoLevel: 40,
	},
	// #587
	emolga: {
		types: ["Electric", "Air"],
	},
	// #588
	karrablast: {
		evos: ["accelgor"],
	},
	// #589
	escavalier: {
		prevo: "shelmet",
		evoLevel: 27,
	},
	// #616
	shelmet: {
		evos: ["escavalier"],
	},
	// #617
	accelgor: {
		prevo: "karrablast",
		evoLevel: 27,
	},
	// #641
	tornadus: {
		types: ["Air"],
	},
	tornadustherian: {
		types: ["Air"],
	},
	// #642
	thundurus: {
		types: ["Air", "Electric"],
	},
	thundurustherian: {
		types: ["Air", "Electric"],
	},
	// #643
	reshiram: {
		baseStats: {hp: 99, atk: 120, def: 99, spa: 150, spd: 120, spe: 90},
	},
	// #644
	zekrom: {
		baseStats: {hp: 99, atk: 150, def: 120, spa: 120, spd: 99, spe: 90},
	},
	// #645
	landorus: {
		types: ["Air", "Ground"],
	},
	landorustherian: {
		types: ["Ground"],
	},
// Generation VI – 72 Pokémon – #650 Chespin to #721 Volcanion
	// #651
	quilladin: {
		evoLevel: 20,
	},
	// #652
	chesnaught: {
		evoLevel: 40,
	},
	// #654
	braixen: {
		evoLevel: 20,
	},
	// #655
	delphox: {
		evoLevel: 40,
	},
	// #657
	frogadier: {
		evoLevel: 20,
	},
	// #658
	greninja: {
		evoLevel: 40,
	},
	// #666
	vivillon: {
		types: ["Bug"],
	},
	vivillonfancy: {
		types: ["Bug"],
	},
	vivillonpokeball: {
		types: ["Bug"],
	},
	// #683
	aromatisse: {
		evoType: "levelHold",
		evoItem: "Sachet",
	},
	// #685
	slurpuff: {
		evoType: "levelHold",
		evoItem: "Whipped Dream",
	},
	// #690
	skrelp: {
		types: ["Dragon", "Poison", "Water"],
	},
	// #691
	dragalge: {
		types: ["Dragon", "Poison", "Water"],
	},
	// #692
	clauncher: {
		types: ["Water", "Bug"],
	},
	// #693
	clawitzer: {
		types: ["Water", "Bug"],
	},
	// #694
	helioptile: {
		types: ["Electric"],
	},
	// #695
	heliolisk: {
		types: ["Electric"],
	},
	// #700
	sylveon: {
		evoType: "stone",
		evoItem: "Shiny Stone",
	},
	// #704
	goomy: {
		types: ["Dragon", "Water"],
	},
	// #705
	sliggoo: {
		types: ["Dragon", "Water"],
	},
	// #706
	goodra: {
		types: ["Dragon", "Water"],
	},
	// #709
	trevenant: {
		evoLevel: 42,
	},
	// #711
	gourgeist: {
		evoLevel: 42,
	},
	gourgeistsmall: {
		evoLevel: 42,
	},
	gourgeistlarge: {
		evoLevel: 42,
	},
	gourgeistsuper: {
		evoLevel: 42,
	},
	// #714
	noibat: {
		types: ["Bat", "Dragon"],
	},
	// #715
	noivern: {
		types: ["Bat", "Dragon"],
	},
	// #716
	xerneas: {
		baseStats: {hp: 123, atk: 131, def: 95, spa: 128, spd: 98, spe: 103},
	},
	// #717
	yveltal: {
		baseStats: {hp: 123, atk: 131, def: 95, spa: 128, spd: 98, spe: 103},
	},
	// #718
	zygarde: {
		prevo: "zygarde10",
		evoLevel: 50,
		evos: ["zygardecomplete"],
	},
	zygarde10: {
		evos: ["zygarde"],
	},
	zygardecomplete: {
		prevo: "zygarde",
		evoLevel: 100,
	},
// Generation VII – 81+5+2 Pokémon – #722 Rowlet to #809 Melmetal
	// #723
	dartrix: {
		evoLevel: 20,
	},
	// #724
	decidueye: {
		evoLevel: 40,
	},
	// #726
	torracat: {
		evoLevel: 20,
	},
	// #727
	incineroar: {
		evoLevel: 40,
	},
	// #729
	brionne: {
		evoLevel: 20,
	},
	// #730
	primarina: {
		evoLevel: 40,
	},
	// #738
	vikavolt: {
		evoType: "stone",
		evoItem: "Magnetic Stone",
	},
	// #739
	crabrawler: {
		types: ["Fighting", "Bug"],
	},
	// #740
	crabominable: {
		types: ["Fighting", "Bug", "Ice"],
		evoType: "stone",
		evoItem: "Ice Stone",
	},
	// #744
	rockruff: {
		types: ["Normal", "Rock"],
	},
	// #745
	lycanroc: {
		types: ["Normal", "Rock"],
	},
	// #764
	comfey: {
		types: ["Fairy", "Air"],
	},
	// #773
	silvally: {
		evoLevel: 42,
	},
	// #774
	minior: {
		types: ["Rock", "Air"],
	},
	miniormeteor: {
		types: ["Rock", "Air"],
	},
	// #791
	solgaleo: {
		baseStats: {hp: 136, atk: 136, def: 107, spa: 113, spd: 89, spe: 97},
		evoType: "stone",
		evoItem: "Sun Stone",
	},
	// #792
	lunala: {
		baseStats: {hp: 136, atk: 113, def: 89, spa: 136, spd: 107, spe: 97},
		evoType: "stone",
		evoItem: "Moon Stone",
	},
	// #792
	celesteela: {
		types: ["Steel", "Air"],
	},
};

exports.BattlePokedex = BattlePokedex;

