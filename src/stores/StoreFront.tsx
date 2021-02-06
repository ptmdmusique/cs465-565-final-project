import { createStore, createTypedHooks } from "easy-peasy";
import { APIModel, api } from "./api/api.store";

export interface StoreModel {
  api: APIModel;
}

const model: StoreModel = { api };

const { useStoreState, useStoreActions } = createTypedHooks<StoreModel>();

export const store = createStore(model);
export { useStoreState, useStoreActions };
