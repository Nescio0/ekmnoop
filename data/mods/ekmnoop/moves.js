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
	"defog": {
		inherit: true,
		type: "Air",
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
	"gust": {
		inherit: true,
		type: "Air",
	},
	"hurricane": {
		inherit: true,
		type: "Air",
	},
	"leechlife": {
		inherit: true,
		basePower: 75,
		desc: "The user recovers 2/3 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3× normal, rounded half down.",
		shortDesc: "User recovers 67% of the damage dealt.",
		drain: [2, 3],
		type: "Bat",
	},
	"megadrain": {
		inherit: true,
		basePower: 60,
	},
	"mirrormove": {
		inherit: true,
		type: "Normal",
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
	"roost": {
		inherit: true,
		type: "Bird",
	},
	"sandstorm": {
		inherit: true,
		type: "Ground",
  },
	"skyattack": {
		inherit: true,
		type: "Air",
	},
	"skydrop": {
		inherit: true,
		type: "Bird",
	},
	"sonicboom": {
		inherit: true,
		type: "Air",
	},
	"supersonic": {
		inherit: true,
		type: "Air",
	},
	"supersonicskystrike": {
		inherit: true,
		type: "Air",
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
