import getClass from "data/helpers/classHelper";
import { alignmentList, DnDClass } from "data/model/dndModel";
import { action, Action } from "easy-peasy";

export interface APIModel {
  classStat: Record<string, any> | null;

  generateDndClass: Action<APIModel, DnDClass>;
}

export const api: APIModel = {
  classStat: null,

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
};
