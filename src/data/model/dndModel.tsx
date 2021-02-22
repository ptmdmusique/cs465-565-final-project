export const mapperClassList = [
  "class",
  "adept",
  "aristocrat",
  "barbarian",
  "bard",
  "cleric",
  "commoner",
  "druid",
  "expert",
  "fighter",
  "monk",
  "paladin",
  "ranger",
  "rogue",
  "sorcerer",
  "warrior",
  "wizard",
] as const;
export type DnDClass = typeof mapperClassList[number];

export const alignmentList = ["good", "evil", "neutral"];
export type Alignment = typeof alignmentList[number];
