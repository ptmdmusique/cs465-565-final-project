export const mapperClassList = [
  "class",
  /* "adept", */
  /* "aristocrat", */
  "barbarian",
  "bard",
  "cleric",
  /* "commoner", */
  "druid",
  /* "expert", */
  "fighter",
  "monk",
  "paladin",
  "ranger",
  "rogue",
  "sorcerer",
  "warlock",
  /* "warrior", */
  "wizard",
] as const;
export type DnDClass = typeof mapperClassList[number];

export const dndClass = {
  class_levels: "",
  hit_die: 0,
  index: "",
  name: "",
  proficiencies: [],
  proficiency_choices: [],
  saving_throws: [],
  starting_equipment: [],
  starting_equipment_options: [],
  subclasses: [],
  url: "",
} as const;
export type DnDClassStats = typeof dndClass;

export const alignmentList = ["good", "evil", "neutral"];
export type Alignment = typeof alignmentList[number];
