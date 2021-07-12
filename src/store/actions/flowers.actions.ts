import { createAction, props } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";




export enum flowersActionsType {

  LoadingFlowers = "[FLOWERS] Loading array flowers from the server",
  LoadingSuccessFlowers = "[FLOWERS] Loading  array flowers success from the server",
  // initialErrorFlowers = "[FLOWERS] initial error for array bouquets",
  changeFavorites = "[FLOWERS] change parameter favorites, for element array flowers",
  FavoritesTrue = "[FLOWERS]   favorites true",


  SetFlowersArray = "[FLOWERS] set  flowers array",

  changeFlowers = "[FLOWERS] change  element for array flowers",
}


export const loadingFlowers = createAction(`${flowersActionsType.LoadingFlowers}`);

export const successfulLoadingFlowers = createAction(`${flowersActionsType.LoadingSuccessFlowers}`, props<{array: ProductInterface[] }>() );

// изменяет параметр favorite
export const changeFavoritesFlowers = createAction(`${flowersActionsType.changeFavorites}`, props<{element: ProductInterface}>() );

export const flowersChangeElement = createAction(`${flowersActionsType.changeFlowers}`, props<{newElement: ProductInterface}>() );

export const setFlowersArray = createAction(`${flowersActionsType.SetFlowersArray}`, props<{newArray: ProductInterface[]}>() );

export const favoritesTrue = createAction(`${flowersActionsType.FavoritesTrue}`, props<{newElement: ProductInterface}>() );
