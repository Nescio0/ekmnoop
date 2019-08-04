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
		type: "Bird",
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
		basePower: 70,
	},
	"dreameater": {
		inherit: true,
		pp: 10,
	},
	"drillpeck": {
		inherit: true,
		type: "Bird",
	},
	"featherdance": {
		inherit: true,
		type: "Bird",
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
		basePower: 40,
		pp: 20,
	},
	"glitzyglow": {
		inherit: true,
		type: "Light",
	},
	"gust": {
		inherit: true,
		type: "Air",
	},
	"hurricane": {
		inherit: true,
		type: "Air",
	},
	"laserfocus": {
		inherit: true,
		type: "Light",
	},
	"leechlife": {
		inherit: true,
		basePower: 75,
		desc: "The user recovers 2/3 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3× normal, rounded half down.",
		shortDesc: "User recovers 67% of the damage dealt.",
		drain: [2, 3],
		type: "Bat",
	},
	"lightofruin": {
		inherit: true,
		type: "Light",
	},
	"lightscreen": {
		inherit: true,
		type: "Light",
	},
	"lightthatburnsthesky": {
		inherit: true,
		type: "Light",
	},
	"lunardance": {
		inherit: true,
		type: "Light",
	},
	"megadrain": {
		inherit: true,
		basePower: 60,
	},
	"menacingmoonrazemaelstrom": {
		inherit: true,
		type: "Light",
	},
	"mirrormove": {
		inherit: true,
		type: "Normal",
	},
	"moonblast": {
		inherit: true,
		type: "Light",
	},
	"moongeistbeam": {
		inherit: true,
		type: "Light",
	},
	"moonlight": {
		inherit: true,
		type: "Light",
	},
	"morningsun": {
		inherit: true,
		type: "Light",
	},
	"oblivionwing": {
		inherit: true,
		type: "Bird",
	},
	"peck": {
		inherit: true,
		type: "Bird",
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
	"roost": {
		inherit: true,
		type: "Bird",
	},
	"sandstorm": {
		inherit: true,
		type: "Ground",
  },
	"signalbeam": {
		inherit: true,
		type: "Light",
	},
	"simplebeam": {
		inherit: true,
		type: "Light",
	},
	"skyattack": {
		inherit: true,
		type: "Air",
	},
	"skydrop": {
		inherit: true,
		type: "Bird",
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
	"spotlight": {
		inherit: true,
		type: "Light",
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
	"swift": {
		inherit: true,
		type: "Light",
	},
	"tailwind": {
		inherit: true,
		type: "Air",
	},
	"twister": {
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
