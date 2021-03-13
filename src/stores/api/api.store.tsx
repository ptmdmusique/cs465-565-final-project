import axios from "axios";
import getClass from "data/helpers/classHelper";
import traitMapper from "data/mappers/traitMapper";
import {
  Alignment,
  alignmentList,
  CharacterSheet,
  ClassStat,
  DnDClass,
  Gender,
} from "data/model/dndModel";
import { action, Action, computed, Computed, thunk, Thunk } from "easy-peasy";
import { StoreModel } from "stores/StoreFront";
import { getRandomArrayElement, getRandomInt, shuffle } from "util/common.util";
import { Class } from "../../data/model/classModel";
import { Collection } from "../../data/model/commonModels";
import { Race } from "../../data/model/raceModel";

let backendRaceUrl =
  "https://us-central1-cs465-565.cloudfunctions.net/fetchRaceData";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  backendRaceUrl = "http://localhost:5001/cs465-565/us-central1/fetchRaceData";
}

const getIndexFromCollection = (collection: Collection): string[] => {
  return collection.results.map((entry) => entry.index);
};

const MAX_TRAIT = 10;
const generatePersonalityTraits = () => {
  const numToGenerate = getRandomInt(
    Math.max(Math.min(traitMapper.length, MAX_TRAIT), 1)
  );
  return shuffle(traitMapper).slice(0, numToGenerate);
};

export interface APIModel {
  // * State
  characterSheet: Computed<APIModel, CharacterSheet>;

  alignment: Alignment;

  classStat: ClassStat | null;
  name: string;
  gender: Gender;
  personalityTraits: string[];

  classes: string[];
  races: string[];

  class: Class | null;
  abilities: Collection | null;
  race: Race | null;
  allEquipment: Collection | null;

  // * Actions
  generateClass: Action<APIModel, DnDClass>;
  generatePersonalityTraits: Action<APIModel>;

  setName: Action<APIModel, string>;
  setGender: Action<APIModel, Gender>;
  setAlignment: Action<APIModel, Alignment | "random">;
  setClasses: Action<APIModel, string[]>;
  setClass: Action<APIModel, Class>;
  setAbilities: Action<APIModel, Collection>;
  setRaces: Action<APIModel, string[]>;
  setRace: Action<APIModel, Race>;
  setAllEquipment: Action<APIModel, Collection>;

  // * Thunk
  generate: Thunk<APIModel, { myClass?: DnDClass; race?: string }>;
  initializeStore: Thunk<APIModel>;
  // fetchAllClasses: Thunk<APIModel>;
  fetchAllRaces: Thunk<APIModel>;

  generatePeople: Thunk<APIModel>;
  // generateAbilities: Thunk<APIModel>;
  generateRace: Thunk<APIModel, string, any, StoreModel>;
  // generateAllEquipment: Thunk<APIModel>;
}

export const api: APIModel = {
  // * State
  characterSheet: computed((state) => {
    return {
      name: state.name,
      alignment: state.alignment,
      gender: state.gender,

      classStat: state.classStat,
      personalTraits: state.personalityTraits,
      race: state.race,
    };
  }),

  name: "Who are you?",
  alignment: "neutral",
  gender: "male",
  personalityTraits: [],

  classStat: null,
  classes: [],
  class: null,
  abilities: null,
  races: [],
  race: null,
  allEquipment: null,

  // * Actions
  setGender: action((state, genderText) => {
    state.gender = genderText;
  }),

  setName: action((state, name) => {
    state.name = name;
  }),

  setAlignment: action((state, alignment) => {
    let newAlignment: Alignment;
    if (alignment === "random") {
      newAlignment = getRandomArrayElement(
        (alignmentList as any) as Alignment[]
      );
    } else {
      newAlignment = state.alignment;
    }

    state.alignment = newAlignment;
  }),

  setClasses: action((state, dndClasses) => {
    state.classes = dndClasses;
  }),

  setClass: action((state, dndClass) => {
    state.class = dndClass;
  }),

  setAbilities: action((state, abilities) => {
    state.abilities = abilities;
  }),

  setRaces: action((state, races) => {
    state.races = races;
  }),

  setRace: action((state, race) => {
    state.race = race;
  }),

  setAllEquipment: action((state, equipment) => {
    state.allEquipment = equipment;
  }),

  // fetchAllClasses: thunk(async (actions) => {
  //   const data = (await axios.get(dndAPISrc + "classes/")).data as Collection;
  //   actions.setClasses(getIndexFromCollection(data));
  // }),

  // payload: string name of class
  generateClass: action((state, className) => {
    let classToGenerate = className;
    if (className === "random") {
      const randomScore = Math.floor(Math.random() * 100) + 1; // 1 to 100

      const randomIndex = Math.floor(Math.random() * alignmentList.length);
      const randomAlignment = alignmentList[randomIndex];

      classToGenerate = getClass.getClass(randomAlignment, randomScore);
    }

    state.classStat = getClass.generateDnDClass(classToGenerate) as ClassStat;
  }),
  generatePersonalityTraits: action((state) => {
    state.personalityTraits = generatePersonalityTraits();
  }),

  // * Thunks
  generate: thunk(async (actions, { myClass, race }) => {
    await actions.fetchAllRaces();
    actions.generateRace(race || "random"); // generate a random race trait
    actions.generateClass(myClass || "random"); // generate a random class trait
    actions.generatePersonalityTraits();
    await actions.generatePeople();
  }),

  initializeStore: thunk(async (actions) => {
    actions.generate({});
  }),

  fetchAllRaces: thunk(async (actions) => {
    const data = (
      await axios.post(
        backendRaceUrl,
        { data: {} },
        { headers: { "Content-Type": "application/json" } }
      )
    ).data.result as Collection;

    actions.setRaces(getIndexFromCollection(data));
  }),

  generatePeople: thunk(async (actions) => {
    interface RandomNameDto {
      results: {
        gender: "female" | "male";
        name: { first: string; last: string };
      }[];
    }

    const fetchResult = (await axios.get("https://randomuser.me/api/"))
      .data as RandomNameDto;

    const { gender, name } = fetchResult.results[0];

    actions.setGender(gender);
    actions.setName(`${name.first} ${name.last}`);
  }),

  generateRace: thunk(async (actions, payload, { getState }) => {
    let raceToGenerate = payload;
    if (payload === "random") {
      raceToGenerate = getRandomArrayElement(getState().races);
    }

    const { data } = await axios.post(
      backendRaceUrl,
      { data: { raceToGenerate } },
      { headers: { "Content-Type": "application/json" } }
    );

    actions.setRace(data.result);
  }),

  // generateAllEquipment: thunk(async (actions) => {
  //   const { data } = await axios.get(dndAPISrc + "equipment/");
  //   actions.setAllEquipment(data);
  // }),
  // generateAbilities: thunk(async (actions) => {
  //   const { data } = await axios.get(dndAPISrc + "ability-scores/");
  //   actions.setAbilities(data);
  // }),
};
