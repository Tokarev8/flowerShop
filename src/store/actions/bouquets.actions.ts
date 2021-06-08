import { Action, createAction, props} from "@ngrx/store";
import { BouquetsState } from "../states/state-categories/bouquets-state";
import {ProductInterface} from "../../interfaces/product-state";


export enum stateActionsType {
  addElementBouquets = "[BOUQUETS] add element for array bouquets",
  addElementsBouquets = "[BOUQUETS] add elements for array bouquets",

  deleteElementBouquets = "[BOUQUETS] delete element for array bouquets",
  deleteElementsBouquets = "[BOUQUETS] delete elements for array bouquets",

  showElementBouquets = "[BOUQUETS] show element for array bouquets",
  showElementsBouquets = "[BOUQUETS] show elements for array bouquets",

  initialBouquets = "[BOUQUETS] initial for array bouquets",
  initialSuccessBouquets = "[BOUQUETS] initial success for array bouquets",
}

export const addElement = createAction(`${stateActionsType.addElementBouquets}`);



export const addElements = createAction(`${stateActionsType.addElementsBouquets}`,
  props<{array: ProductInterface[] }>() );

export const deleteElement = createAction(`${stateActionsType.deleteElementBouquets}`);
export const deleteElements = createAction(`${stateActionsType.deleteElementsBouquets}`);

export const showElement = createAction(`${stateActionsType.showElementBouquets}`);
export const showElements = createAction(`${stateActionsType.showElementsBouquets}`);

export const initialBouquets = createAction(`${stateActionsType.initialBouquets}`);
export const initialSuccess = createAction(`${stateActionsType.initialSuccessBouquets}`, props<{array: ProductInterface[] }>() );


