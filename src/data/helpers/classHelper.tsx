import npcClassMapper from "data/mappers/npcClassMapper";
import {
  Alignment,
  ClassStat,
  DnDClass,
  RandomClassInfo,
} from "data/model/dndModel";
import { getRandomArrayElement } from "util/common.util";
import inRange from "./helpers";

// for each property of the returned object that is an array,
// the index matches the level of the character.
// index of 0 = npc level 1
/*
  to get the base attack bonus awarded to an Adept class of level 3:
  const adept = getClass.getAdept();
  adept.baseAttackBonus[2]
*/

const getMappedClass = (
  nameOfData: DnDClass
): RandomClassInfo | ClassStat | null => {
  const mappedObject: Record<string, any> = { name: nameOfData };
  const mapper = npcClassMapper[nameOfData];
  if (!mapper) {
    return null;
  }

  const rows = mapper.split(".");
  const rowCol: string[][] = [];
  rows.forEach((row) => {
    rowCol.push(row.split(","));
  });

  const headers = rowCol[0];
  headers.forEach((header, column) => {
    mappedObject[header] = rowCol.map((cell) => {
      return cell[column];
    });
    mappedObject[header].shift();
  });

  if (nameOfData !== "random") {
    for (const attribute in mappedObject) {
      // --- Transform into ClassStat
      const curStat = mappedObject[attribute];
      if (Array.isArray(curStat)) {
        mappedObject[attribute] = parseFloat(getRandomArrayElement(curStat));
      }
    }
  }
  return mappedObject as RandomClassInfo | ClassStat;
};

const getClass = {
  // alignments: good, neutral, or evil
  // score: 1 inclusive to 100 inclusive
  // returns a class given the alignment and score
  getClass: (alignment: Alignment, score: number): DnDClass => {
    const classObject = getMappedClass("random") as RandomClassInfo;
    let returnClass = "";

    classObject[alignment].forEach((element: any, i: number) => {
      const min = element.split("-")[0];
      const max = element.split("-")[1];
      if (inRange(score, min, max)) {
        returnClass = classObject.class[i];
      }
    });
    return returnClass as DnDClass;
  },
  /* getAdept: () => {
    return getMappedClass("adept");
  },
  getAristocrat: () => {
    return getMappedClass("aristocrat");
  }, */
  getBarbarian: () => {
    return getMappedClass("barbarian");
  },
  getBard: () => {
    return getMappedClass("bard");
  },
  getCleric: () => {
    return getMappedClass("cleric");
  },
  /* getCommoner: () => {
    return getMappedClass("commoner");
  }, */
  getDruid: () => {
    return getMappedClass("druid");
  },
  /* getExpert: () => {
    return getMappedClass("expert");
  }, */
  getFighter: () => {
    return getMappedClass("fighter");
  },
  getMonk: () => {
    return getMappedClass("monk");
  },
  getPaladin: () => {
    return getMappedClass("paladin");
  },
  getRanger: () => {
    return getMappedClass("ranger");
  },
  getRogue: () => {
    return getMappedClass("rogue");
  },
  getSorcerer: () => {
    return getMappedClass("sorcerer");
  },
  getWarlock: () => {
    return getMappedClass("warlock");
  },
  /* getWarrior: () => {
    return getMappedClass("warrior");
  }, */
  getWizard: () => {
    return getMappedClass("wizard");
  },
  generateDnDClass: (className: DnDClass) => getMappedClass(className),
};

export default getClass;
