import npcClassMapper from "data/mappers/npcClassMapper";
import inRange from "./helpers.js";

// for each property of the returned object that is an array,
// the index matches the level of the character.
// index of 0 = npc level 1
/*
  to get the base attack bonus awarded to an Adept class of level 3:
  const adept = getClass.getAdept();
  adept.baseAttackBonus[2]
*/

const getMappedClass = (nameOfData, mapper) => {
  var mappedObject = { name: nameOfData };
  var rows = mapper.split(".");
  var rowCol = [];
  rows.forEach((row) => {
    rowCol.push(row.split(","));
  });
  var headers = rowCol[0];
  headers.forEach((header, column) => {
    mappedObject[header] = rowCol.map((cell) => {
      return cell[column];
    });
    mappedObject[header].shift();
  });
  console.log(mappedObject);
  return mappedObject;
};

var getClass = {
  // alignments: good, neutral, or evil
  // score: 1 inclusive to 100 inclusive
  // returns a class given the alignment and score
  getClass: (alignment, score) => {
    const classObject = getMappedClass("class", npcClassMapper.class);
    var returnClass = '';
    classObject[alignment].forEach((element, i) => {
      const min = element.split("-")[0];
      const max = element.split("-")[1];
      if (inRange(score, min, max)) {
        returnClass = classObject.class[i];
      }
    });
    return returnClass;
  },
  getAdept: () => {
    return getMappedClass("adept", npcClassMapper.adept);
  },
  getAristocrat: () => {
    return getMappedClass("aristocrat", npcClassMapper.aristocrat);
  },
  getBarbarian: () => {
    return getMappedClass("barbarian", npcClassMapper.barbarian);
  },
  getBard: () => {
    return getMappedClass("bard", npcClassMapper.bard);
  },
  getCleric: () => {
    return getMappedClass("cleric", npcClassMapper.cleric);
  },
  getCommoner: () => {
    return getMappedClass("commoner", npcClassMapper.commoner);
  },
  getDruid: () => {
    return getMappedClass("druid", npcClassMapper.druid);
  },
  getExpert: () => {
    return getMappedClass("expert", npcClassMapper.expert);
  },
  getFighter: () => {
    return getMappedClass("fighter", npcClassMapper.fighter);
  },
  getMonk: () => {
    return getMappedClass("monk", npcClassMapper.monk);
  },
  getPaladin: () => {
    return getMappedClass("paladin", npcClassMapper.paladin);
  },
  getRanger: () => {
    return getMappedClass("ranger", npcClassMapper.ranger);
  },
  getRogue: () => {
    return getMappedClass("rogue", npcClassMapper.rogue);
  },
  getSorcerer: () => {
    return getMappedClass("sorcerer", npcClassMapper.sorcerer);
  },
  getWarrior: () => {
    return getMappedClass("warrior", npcClassMapper.warrior);
  },
  getWizard: () => {
    return getMappedClass("wizard", npcClassMapper.wizard);
  },
};

export default getClass;
