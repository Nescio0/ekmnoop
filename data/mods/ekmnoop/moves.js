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
	"bounce": {
		inherit: true,
		type: "Air",
	},
	"defog": {
		inherit: true,
		type: "Air",
	},
	"dragonascent": {
		inherit: true,
		type: "Dragon",
	},
	"floatyfall": {
		inherit: true,
		type: "Air",
	},
	"fly": {
		inherit: true,
		type: "Air",
	},
	"gust": {
		inherit: true,
		type: "Air",
	},
	"hurricane": {
		inherit: true,
		type: "Air",
	},
	"poisonpowder": {
		inherit: true,
		type: "Grass",
	},
	"sandstorm": {
		inherit: true,
		type: "Ground",
  },
	"skyattack": {
		inherit: true,
		type: "Air",
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
};

exports.BattleMovedex = BattleMovedex;
