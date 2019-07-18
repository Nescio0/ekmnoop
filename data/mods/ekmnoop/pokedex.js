'use strict';

// @type {{[k: string]: ModdedTemplateData}}
let BattlePokedex = {
// Generation I – 151 Pokémon – #001 Bulbasaur to #151 Mew
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
		evoLevel: 10,
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
	// #076
	golem: {
		evoLevel: 50,
	},
	golemalola: {
		evoLevel: 50,
	},
	// #078
	rapidash: {
		evoType: "stone",
		evoItem: "Fire Stone",
	},
	// #094
	gengar: {
		evoLevel: 50,
	},
	// #113
	chansey: {
		evoLevel: 10,
	},
	// #130
	gyarados: {
		evoType: "levelHold",
		evoItem: "Dragon Scale",
	},
	// #143
	snorlax: {
		evoLevel: 25,
	},
// Generation II – 100 Pokémon – #152 Chikorita to #251 Celebi
	// #169
	crobat: {
		evoLevel: 44,
	},
	// #176
	togetic: {
		evoLevel: 10,
	},
	// #181
	ampharos: {
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
	// #208
	steelix: {
		evoType: "levelHold",
		evoItem: "Metal Coat",
	},
	// #212
	scizor: {
		evoType: "levelHold",
		evoItem: "Metal Coat",
	},
	// #226
	mantine: {
		evoLevel: 15,
	},
	// #230
	kingdra: {
		evoType: "levelHold",
		evoItem: "Dragon Scale",
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
// Generation III – 135 Pokémon – #252 Treecko to #386 Deoxys
	// #301
	delcatty: {
		evoLevel: 21,
	},
	// #315
	roselia: {
		evoLevel: 10,
	},
	// #350
	milotic: {
		evoType: "levelHold",
		evoItem: "Dragon Scale",
	},
// Generation IV – 107 Pokémon – #387 Turtwig to #493 Arceus
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
	// #466
	electivire: {
		evoType: "levelHold",
		evoItem: "Electirizer",
	},
// Generation V – 156 Pokémon – #494 Victini to #649 Genesect
	// #526
	gigalith: {
		evoLevel: 50,
	},
	// #528
	swoobat: {
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
// Generation VI – 72 Pokémon – #650 Chespin to #721 Volcanion
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
	// #700
	sylveon: {
		evoType: "stone",
		evoItem: "Shiny Stone",
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
// Generation VII – 81+5+2 Pokémon – #722 Rowlet to #809 Melmetal
	// #738
	vikavolt: {
		evoType: "stone",
		evoItem: "Magnetic Stone",
	},
	// #740
	crabominable: {
		evoType: "stone",
		evoItem: "Ice Stone",
	},
	// #773
	silvally: {
		evoLevel: 50,
	},
};

exports.BattlePokedex = BattlePokedex;

