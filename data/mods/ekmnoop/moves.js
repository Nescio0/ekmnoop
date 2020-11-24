/*
Flags:
  authentic: Ignores a target's substitute.
  bite: Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability.
  bullet: Has no effect on Pokemon with the Bulletproof Ability.
  charge: The user is unable to make a move between turns.
  contact: Makes contact.
  dance: When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move.
  defrost: Thaws the user if executed successfully while the user is frozen.
  distance: Can target a Pokemon positioned anywhere in a Triple Battle.
  gravity: Prevented from being executed or selected during Gravity's effect.
  grounded: Has no effect on Flying-type Pokemon, Pokemon with the Levitate Ability, Pokemon holding Air Balloon, or Pokemon affected by Magnet Rise or Telekinesis – except when grounded (by Gravity, Ingrain, Roost, Smack Down, Thousand Arrows, or holding an Iron Ball).
  heal: Prevented from being executed or selected during Heal Block's effect.
  mirror: Can be copied by Mirror Move.
  mystery: Unknown effect.
  nonsky: Prevented from being executed or selected in a Sky Battle.
  powder: Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles.
  protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.
  pulse: Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability.
  punch: Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability.
  recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.
  reflectable: Bounced back to the original user by Magic Coat or the Magic Bounce Ability.
  snatch: Can be stolen from the original user and instead used by another Pokemon using Snatch.
  sound: Has no effect on Pokemon with the Soundproof Ability.
*/

'use strict';

/**@type {{[k: string]: ModdedMoveData}} */
let BattleMovedex = {
	"absorb": {
		inherit: true,
		basePower: 40,
		pp: 20,
	},
	"acrobatics": {
		inherit: true,
		type: "Normal",
	},
	"aerialace": {
		inherit: true,
		type: "Air",
	},
	"aeroblast": {
		inherit: true,
		type: "Air",
	},
	"aircutter": {
		inherit: true,
		type: "Air",
	},
	"airslash": {
		inherit: true,
		type: "Air",
	},
	"ancientpower": {
		inherit: true,
		pp: 10,
	},
	"beakblast": {
		inherit: true,
		type: "Bird",
	},
	"boomburst": {
		inherit: true,
		type: "Air",
	},
	"bounce": {
		inherit: true,
		type: "Air",
	},
	"bravebird": {
		inherit: true,
		type: "Bird",
	},
	"chatter": {
		inherit: true,
		type: "Air",
	},
	"coil": {
		inherit: true,
		type: "Normal",
	},
	"confuseray": {
		inherit: true,
		type: "Light",
	},
	"dazzlinggleam": {
		inherit: true,
		type: "Light",
	},
	"defog": {
		inherit: true,
		type: "Air",
	},
	"dig": {
		inherit: true,
		flags: {contact: 1, charge: 1, grounded: 1, protect: 1, mirror: 1, nonsky: 1},
	},
	"doubleteam": {
		inherit: true,
		type: "Light",
	},
	"dragonascent": {
		inherit: true,
		type: "Dragon",
	},
	"drainpunch": {
		inherit: true,
		basePower: 80,
	},
	"dreameater": {
		inherit: true,
		pp: 10,
	},
	"drillpeck": {
		inherit: true,
		type: "Bird",
	},
	"dualwingbeat": {
		inherit: true,
		type: "Bird",
	},
	"earthquake": {
		inherit: true,
		flags: {grounded: 1, protect: 1, mirror: 1, nonsky: 1},
	},
	"echoedvoice": {
		inherit: true,
		type: "Air",
	},
	"featherdance": {
		inherit: true,
		type: "Bird",
	},
	"fissure": {
		inherit: true,
		flags: {grounded: 1, protect: 1, mirror: 1, nonsky: 1},
	},
	"flash": {
		inherit: true,
		type: "Light",
	},
	"flashcannon": {
		inherit: true,
		type: "Light",
	},
	"floatyfall": {
		inherit: true,
		type: "Air",
	},
	"fly": {
		inherit: true,
		type: "Air",
	},
	"gigadrain": {
		inherit: true,
		basePower: 80,
	},
	"glitzyglow": {
		inherit: true,
		type: "Light",
	},
	"gmaxwindrage": {
		inherit: true,
		type: "Air",
	},
	"growl": {
		inherit: true,
		type: "Air",
	},
	"guillotine": {
		inherit: true,
		type: "Steel",
	},
	"gust": {
		inherit: true,
		type: "Air",
	},
	"howl": {
		inherit: true,
		type: "Air",
	},
	"hurricane": {
		inherit: true,
		type: "Air",
	},
	"hypervoice": {
		inherit: true,
		type: "Air",
	},
	"laserfocus": {
		inherit: true,
		type: "Light",
	},
	"leechlife": {
		inherit: true,
		type: "Bat",
	},
	"lightofruin": {
		inherit: true,
		type: "Light",
	},
	"lightscreen": {
		inherit: true,
		pp: 20,
		type: "Light",
	},
	"lightthatburnsthesky": {
		inherit: true,
		type: "Light",
	},
	"magnitude": {
		inherit: true,
		flags: {grounded: 1, protect: 1, mirror: 1, nonsky: 1},
	},
	"maxairstream": {
		inherit: true,
		type: "Air",
	},
	"megadrain": {
		inherit: true,
		basePower: 60,
	},
	"mirrormove": {
		inherit: true,
		type: "Normal",
	},
	"moonlight": {
		inherit: true,
		pp: 10,
	},
	"morningsun": {
		inherit: true,
		pp: 10,
		type: "Light",
	},
	"nobleroar": {
		inherit: true,
		type: "Air",
	},
	"oblivionwing": {
		inherit: true,
		type: "Bird",
	},
	"ominouswind": {
		inherit: true,
		pp: 10,
	},
	"peck": {
		inherit: true,
		type: "Bird",
	},
	"perishsong": {
		inherit: true,
		type: "Air",
	},
	"pluck": {
		inherit: true,
		type: "Bird",
	},
	"poisonpowder": {
		inherit: true,
		type: "Grass",
	},
	"prismaticlaser": {
		inherit: true,
		type: "Light",
	},
	"reflect": {
		inherit: true,
		type: "Light",
	},
	"relicsong": {
		inherit: true,
		type: "Air",
	},
	"roar": {
		inherit: true,
		type: "Air",
	},
	"roost": {
		inherit: true,
		type: "Bird",
	},
	"rototiller": {
		inherit: true,
		flags: {distance: 1, grounded: 1, nonsky: 1},
	},
	"round": {
		inherit: true,
		type: "Air",
	},
	"sandstorm": {
		inherit: true,
		type: "Ground",
	},
	"screech": {
		inherit: true,
		type: "Air",
	},
	"signalbeam": {
		inherit: true,
		type: "Light",
	},
	"silverwind": {
		inherit: true,
		pp: 10,
	},
	"simplebeam": {
		inherit: true,
		type: "Light",
	},
	"sing": {
		inherit: true,
		type: "Air",
	},
	"skyattack": {
		inherit: true,
		type: "Air",
	},
	"skydrop": {
		inherit: true,
		type: "Bird",
	},
	"snore": {
		inherit: true,
		type: "Air",
	},
	"solarbeam": {
		inherit: true,
		type: "Light",
	},
	"solarblade": {
		inherit: true,
		type: "Light",
	},
	"sonicboom": {
		inherit: true,
		type: "Air",
	},
	"spikes": {
		inherit: true,
		flags: {grounded: 1, nonsky: 1, reflectable: 1},
	},
	"spotlight": {
		inherit: true,
		type: "Light",
	},
	"stickyweb": {
		inherit: true,
		flags: {grounded: 1, nonsky: 1, reflectable: 1},
	},
	"sunnyday": {
		inherit: true,
		type: "Light",
	},
	"supersonic": {
		inherit: true,
		type: "Air",
	},
	"supersonicskystrike": {
		inherit: true,
		type: "Air",
	},
	"synthesis": {
		inherit: true,
		pp: 10,
	},
	"tailwind": {
		inherit: true,
		type: "Air",
	},
	"toxicspikes": {
		inherit: true,
		flags: {grounded: 1, nonsky: 1, reflectable: 1},
	},
	"twister": {
		inherit: true,
		type: "Air",
	},
	"uproar": {
		inherit: true,
		type: "Air",
	},
	"weatherball": {
		inherit: true,
		type: "Air",
	},
	"whirlwind": {
		inherit: true,
		type: "Air",
	},
	"wingattack": {
		inherit: true,
		type: "Bird",
	},
};

exports.BattleMovedex = BattleMovedex;
