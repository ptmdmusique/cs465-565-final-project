import axios from "axios";
import getClass from "data/helpers/classHelper";
import { alignmentList, DnDClass } from "data/model/dndModel";
import { action, Action, thunk, Thunk } from "easy-peasy";

export interface APIModel {
  classStat: Record<string, any> | null;
  classes: Record<string, any> | null;
  class: Record<string, any> | null;
  abilities: Record<string, any> | null;

  generateDndClass: Action<APIModel, DnDClass>;
  generateClasses: Thunk<APIModel>;
  generateClass: Thunk<APIModel, string>;
  generateAbilities: Thunk<APIModel>;

  setClasses: Action<APIModel, any>;
  setClass: Action<APIModel, any>;
  setAbilities: Action<APIModel, any>;
}

export const api: APIModel = {
  classStat: null,
  classes: null,
  class: null,
  abilities: null,

  generateDndClass: action((state, className) => {
    let classToGenerate = className;
    if (className === "class") {
      const randomScore = Math.floor(Math.random() * 100) + 1; // 1 to 100

      const randomIndex = Math.floor(Math.random() * alignmentList.length);
      const randomAlignment = alignmentList[randomIndex];

      classToGenerate = getClass.getClass(randomAlignment, randomScore);
    }

    state.classStat = getClass.generateDnDClass(classToGenerate);
  }),

  generateClasses: thunk(async (actions) => {
    const { data } = await axios.get(dndAPISrc + "classes/");
    actions.setClasses(data.results);
  }),

  // payload: string name of class
  generateClass: thunk(async (actions, payload) => {
    const { data } = await axios.get(dndAPISrc + "classes/" + payload + '/');
    actions.setClass(data);
  }),

  generateAbilities: thunk(async (actions) => {
    const { data } = await axios.get(dndAPISrc + "ability-scores/");
    actions.setAbilities(data);
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
};

const dndAPISrc = "https://www.dnd5eapi.co/api/";
