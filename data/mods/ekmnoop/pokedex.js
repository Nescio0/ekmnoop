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
	// #016
	pidgey: {
		types: ["Bird"],
	},
	// #017
	pidgeotto: {
		types: ["Bird"],
	},
	// #018
	pidgeot: {
		types: ["Bird"],
	},
	pidgeotmega: {
		types: ["Bird"],
	},
	// #021
	spearow: {
		types: ["Bird"],
	},
	// #022
	fearow: {
		types: ["Bird"],
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
	// #054
	psyduck: {
		types: ["Water", "Bird"],
	},
	// #055
	golduck: {
		types: ["Water", "Bird"],
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
	// #083
	farfetchd: {
		types: ["Bird"],
	},
	// #084
	doduo: {
		types: ["Bird"],
	},
	// #085
	dodrio: {
		types: ["Bird"],
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
		types: ["Water", "Dragon", "Fish"],
	},
	// #117
	seadra: {
		types: ["Water", "Dragon", "Fish"],
	},
	// #118
	goldeen: {
		types: ["Water", "Fish"],
	},
	// #119
	seaking: {
		types: ["Water", "Fish"],
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
	// #129
	magikarp: {
		types: ["Water", "Fish"],
	},
	// #130
	gyarados: {
		types: ["Water", "Fish", "Dragon"],
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
	aerodactylmega: {
		types: ["Dragon", "Rock"],
	},
	// #143
	snorlax: {
		evoLevel: 25,
	},
	// #144
	articuno: {
		types: ["Bird", "Ice"],
		baseStats: {hp: 90, atk: 85, def: 100, spa: 125, spd: 95, spe: 85},
	},
	// #145
	zapdos: {
		types: ["Bird", "Electric"],
	},
	// #146
	moltres: {
		types: ["Bird", "Fire"],
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
	// #163
	hoothoot: {
		types: ["Bird"],
	},
	// #164
	noctowl: {
		types: ["Bird"],
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
	// #170
	chinchou: {
		types: ["Water", "Electric", "Fish"],
	},
	// #171
	lanturn: {
		types: ["Water", "Electric", "Fish"],
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
	// #177
	natu: {
		types: ["Psychic", "Bird"],
	},
	// #178
	xatu: {
		types: ["Psychic", "Bird"],
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
	// #198
	murkrow: {
		types: ["Dark", "Bird"],
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
	// #211
	qwilfish: {
		types: ["Water", "Poison", "Fish"],
	},
	// #212
	scizor: {
		evoType: "levelHold",
		evoItem: "Metal Coat",
	},
	// #223
	remoraid: {
		types: ["Water", "Fish"],
	},
	// #225
	delibird: {
		types: ["Bird", "Ice"],
	},
	// #226
	mantine: {
		types: ["Water", "Fish"],
		evoLevel: 15,
	},
	// #227
	skarmory: {
		types: ["Bird", "Steel"],
	},
	// #230
	kingdra: {
		types: ["Water", "Dragon", "Fish"],
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
		types: ["Bird", "Psychic", "Water"],
		baseStats: {hp: 108, atk: 90, def: 130, spa: 90, spd: 150, spe: 110},
	},
	// #250
	hooh: {
		types: ["Bird", "Fire"],
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
	// #255
	torchic: {
		types: ["Fire", "Bird"],
	},
	// #256
	combusken: {
		types: ["Fire", "Fighting", "Bird"],
		evoLevel: 20,
	},
	// #257
	blaziken: {
		types: ["Fire", "Fighting", "Bird"],
		evoLevel: 40,
	},
	blazikenmega: {
		types: ["Fire", "Fighting", "Bird"],
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
	// #276
	tailow: {
		types: ["Bird"],
	},
	// #277
	swellow: {
		types: ["Bird"],
	},
	// #278
	wingull: {
		types: ["Bird", "Water"],
	},
	// #279
	pelipper: {
		types: ["Bird", "Water"],
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
	// #318
	carvanha: {
		types: ["Water", "Dark", "Fish"],
	},
	// #319
	sharpedo: {
		types: ["Water", "Dark", "Fish"],
	},
	sharpedomega: {
		types: ["Water", "Dark", "Fish"],
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
		types: ["Air", "Bird"],
	},
	// #334
	altaria: {
		types: ["Air", "Bird", "Dragon"],
	},
	altariamega: {
		types: ["Air", "Bird", "Dragon"],
	},
	// #339
	barboach: {
		types: ["Water", "Ground", "Fish"],
	},
	// #340
	whiscash: {
		types: ["Water", "Ground", "Fish"],
	},
	// #341
	corphish: {
		types: ["Water", "Bug"],
	},
	// #342
	crawdaunt: {
		types: ["Water", "Bug", "Dark"],
	},
	// #349
	feebas: {
		types: ["Water", "Fish"],
	},
	// #350
	milotic: {
		types: ["Water", "Fish", "Dragon"],
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
	// #367
	huntail: {
		types: ["Water", "Fish"],
	},
	// #368
	gorebyss: {
		types: ["Water", "Fish"],
	},
	// #369
	relicanth: {
		types: ["Water", "Rock", "Fish"],
	},
	// #370
	luvdisc: {
		types: ["Water", "Fish"],
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
	// #393
	piplup: {
		types: ["Water", "Bird"],
	},
	// #394
	prinplup: {
		types: ["Water", "Bird"],
		evoLevel: 20,
	},
	// #395
	empoleon: {
		types: ["Water", "Bird"],
		evoLevel: 40,
	},
	// #396
	starley: {
		types: ["Bird"],
	},
	// #397
	staravia: {
		types: ["Bird"],
	},
	// #398
	staraptor: {
		types: ["Bird"],
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
	// #430
	honchkrow: {
		types: ["Dark", "Bird"],
	},
	// #433
	chingling: {
		evoLevel: 15,
	},
	// #441
	chatot: {
		types: ["Bird"],
	},
	// #448
	lucario: {
		evoLevel: 25,
	},
	// #452
	drapion: {
		types: ["Poison", "Bug", "Dark"],
	},
	// #456
	finneon: {
		types: ["Water", "Fish"],
	},
	// #457
	lumineon: {
		types: ["Water", "Fish"],
	},
	// #458
	mantyke: {
		types: ["Water", "Fish"],
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
	// #479
	rotomfan: {
		types: ["Electric", "Air"],
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
	// #492
	shayminsky: {
		types: ["Grass", "Air"],
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
	// #519
	pidove: {
		types: ["Bird"],
	},
	// #520
	tranquill: {
		types: ["Bird"],
	},
	// #521
	unfezant: {
		types: ["Bird"],
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
	// #550
	basculin: {
		types: ["Water", "Fish"],
	},
	basculinbluestriped: {
		types: ["Water", "Fish"],
	},
	// #561
	sigilyph: {
		types: ["Psychic", "Bird"],
	},
	// #566
	archen: {
		types: ["Bird", "Rock"],
	},
	// #567
	archeops: {
		types: ["Bird", "Rock"],
	},
	// #580
	ducklett: {
		types: ["Bird", "Water"],
	},
	// #581
	swanna: {
		types: ["Bird", "Water"],
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
	// #594
	alomomola: {
		types: ["Water", "Fish"],
	},
	// #602
	tynamo: {
		types: ["Electric", "Fish"],
	},
	// #603
	eelektrik: {
		types: ["Electric", "Fish"],
	},
	// #604
	eelektross: {
		types: ["Electric", "Fish"],
	},
	// #613
	cubchoo: {
		types: ["Ice", "Normal"],
	},
	// #614
	beartic: {
		types: ["Ice", "Normal"],
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
	// #627
	rufflet: {
		types: ["Bird"],
	},
	// #628
	braviary: {
		types: ["Bird"],
	},
	// #629
	vullaby: {
		types: ["Bird", "Dark"],
	},
	// #630
	mandibuzz: {
		types: ["Bird", "Dark"],
	},
	// #641
	tornadus: {
		types: ["Air"],
	},
	tornadustherian: {
		types: ["Air", "Bird"],
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
	// #661
	fletchling: {
		types: ["Bird", "Fire"],
	},
	// #662
	fletchinder: {
		types: ["Bird", "Fire"],
	},
	// #663
	talonflame: {
		types: ["Bird", "Fire"],
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
	// #674
	pancham: {
		types: ["Fighting", "Normal"],
	},
	// #675
	pangoro: {
		types: ["Fighting", "Normal", "Dark"],
	},
	// #682
	spritzee: {
		types: ["Fairy", "Bird"],
	},
	// #683
	aromatisse: {
		types: ["Fairy", "Bird"],
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
		types: ["Dragon", "Poison", "Water", "Fish"],
	},
	// #691
	dragalge: {
		types: ["Dragon", "Poison", "Water", "Fish"],
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
	// #701
	hawlucha: {
		types: ["Bird", "Fighting"],
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
		types: ["Fairy", "Normal"],
		baseStats: {hp: 123, atk: 131, def: 95, spa: 128, spd: 98, spe: 103},
	},
	// #717
	yveltal: {
		types: ["Dark", "Bird"],
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
	// #722
	rowlet: {
		types: ["Grass", "Bird"],
	},
	// #723
	dartrix: {
		types: ["Grass", "Bird"],
		evoLevel: 20,
	},
	// #724
	decidueye: {
		types: ["Grass", "Bird"],
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
	// #731
	pikipek: {
		types: ["Bird"],
	},
	// #732
	trumbeak: {
		types: ["Bird"],
	},
	// #733
	toucannon: {
		types: ["Bird"],
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
	// #741
	oricorio: {
		types: ["Bird", "Fire"],
	},
	oricoriopompom: {
		types: ["Bird", "Electric"],
	},
	oricoriopau: {
		types: ["Bird", "Psychic"],
	},
	oricoriosensu: {
		types: ["Bird", "Ghost"],
	},
	// #744
	rockruff: {
		types: ["Normal", "Rock"],
	},
	// #745
	lycanroc: {
		types: ["Normal", "Rock"],
	},
	// #746
	wishiwashi: {
		types: ["Water", "Fish"],
	},
	wishiwashischool: {
		types: ["Water", "Fish"],
	},
	// #749
	mudbray: {
		types: ["Ground", "Normal"],
	},
	// #750
	mudsdale: {
		types: ["Ground", "Normal"],
	},
	// #764
	comfey: {
		types: ["Fairy", "Air"],
	},
	// #771
	pyukumuku: {
		types: ["Water", "Fish"],
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
	// #779
	bruxish: {
		types: ["Water", "Psychic", "Fish"],
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

