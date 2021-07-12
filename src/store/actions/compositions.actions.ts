import { createAction, props } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";
import {bouquetsActionsType} from "./bouquets.actions";




export enum compositionsActionsType {
  LoadingCompositions = "[COMPOSITIONS] Loading array compositions from the server",
  LoadingSuccessCompositions = "[COMPOSITIONS] Loading  array compositions success from the server",
  // initialErrorFlowers = "[COMPOSITIONS] initial error for array bouquets",
  changeFavoritesCompositions = "[COMPOSITIONS] change parameter favorites, for element array compositions",
  FavoritesTrue = "[COMPOSITIONS]   favorites true",

  changeCompositions = "[COMPOSITIONS] change  element for array compositions",
}


export const loadingComposistions = createAction(`${compositionsActionsType.LoadingCompositions}`);

export const successfulLoadingComposistions = createAction(`${compositionsActionsType.LoadingSuccessCompositions}`, props<{array: ProductInterface[] }>() );

export const changeFavoritesComposistions = createAction(`${compositionsActionsType.changeFavoritesCompositions}`, props<{element: ProductInterface}>() );
export const favoritesComposistionsTrue = createAction(`${bouquetsActionsType.FavoritesTrue}`, props<{newElement: ProductInterface}>() );

export const compositionsChangeElement = createAction(`${compositionsActionsType.changeCompositions}`, props<{newElement: ProductInterface}>() );
