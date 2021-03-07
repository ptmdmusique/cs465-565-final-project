import { Race } from "data/model/raceModel";

export const mapperClassList = [
  "Random",
  /* "Adept", */
  /* "Aristocrat", */
  "Barbarian",
  "Bard",
  "Cleric",
  /* "Commoner", */
  "Druid",
  /* "Expert", */
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  /* "Warrior", */
  "Wizard",
] as const;
export type DnDClass = typeof mapperClassList[number];

export const alignmentList = ["good", "evil", "neutral"] as const;
export type Alignment = typeof alignmentList[number];

export interface ClassStat {
  level: number;
  hp: number;
  name: string;

  ac: number;
  cha: number;
  con: number;
  dex: number;
  int: number;
  str: number;
  wis: number;

  melee: number;
  range: number;

  feats: number;
  skillPoints: number;

  spellsPerDay: number;

  willSave: number;
  refSave: number;
  fortSave: number;
}

export interface RandomClassInfo {
  class: string[];
  name: string;

  evil: string[];
  good: string[];
  neutral: string[];
}

export type Gender = "female" | "male";

export interface CharacterSheet {
  name: string;
  alignment: Alignment;
  gender: Gender;

  classStat: ClassStat | null;
  personalTraits: string[];
  race: Race | null;
}
