import { action, Action } from "easy-peasy";

export interface APIModel {
  myState: boolean;

  setMyState: Action<APIModel, boolean>;
}

export const api: APIModel = {
  myState: false,

  setMyState: action((state, myState) => {
    state.myState = myState;
  }),
};
