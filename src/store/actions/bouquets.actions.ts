import { createAction, props } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";



export enum bouquetsActionsType {
  addElementBouquets = "[BOUQUETS] add element for array bouquets",
  addElementsBouquets = "[BOUQUETS] add elements for array bouquets",

  deleteElementBouquets = "[BOUQUETS] delete element for array bouquets",
  deleteElementsBouquets = "[BOUQUETS] delete elements for array bouquets",

  showElementBouquets = "[BOUQUETS] show element for array bouquets",
  showElementsBouquets = "[BOUQUETS] show elements for array bouquets",

  LoadingBouquets = "[BOUQUETS] Loading array bouquets from the server",
  LoadingSuccessBouquets = "[BOUQUETS] Loading  array bouquets success from the server",
  // initialErrorBouquets = "[BOUQUETS] initial error for array bouquets",

  changeFavorites = "[BOUQUETS] change parameter favorites, for element array bouquets",

  changeBouquets = "[BOUQUETS] change  element for array bouquets",

}

export const addElement = createAction(`${bouquetsActionsType.addElementBouquets}`);



export const addElements = createAction(`${bouquetsActionsType.addElementsBouquets}`,
  props<{array: ProductInterface[] }>() );

export const deleteElement = createAction(`${bouquetsActionsType.deleteElementBouquets}`);
export const deleteElements = createAction(`${bouquetsActionsType.deleteElementsBouquets}`);

export const showElement = createAction(`${bouquetsActionsType.showElementBouquets}`);
export const showElements = createAction(`${bouquetsActionsType.showElementsBouquets}`);

export const loadingBouquets = createAction(`${bouquetsActionsType.LoadingBouquets}`);

export const initialSuccess = createAction(`${bouquetsActionsType.LoadingSuccessBouquets}`, props<{array: ProductInterface[] }>() );

// изменяет параметр favorite
export const bouquetsChangeFavorites = createAction(`${bouquetsActionsType.changeFavorites}`, props<{element: ProductInterface}>() );

export const bouquetsChangeElement = createAction(`${bouquetsActionsType.changeBouquets}`, props<{newElement: ProductInterface}>() );







