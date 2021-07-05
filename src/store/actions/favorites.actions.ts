import { Action, createAction, props } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";
import { BouquetsState } from "../states/state-categories/bouquets-state";



export enum favoritesActionsType {
  addElementFavorites = "[FAVORITES] add element for array favorites",
  addElementsFavorites = "[FAVORITES] add elements for array favorites",

  deleteElementFavorites = "[FAVORITES] delete element for array favorites",
  deleteElementsFavorites = "[FAVORITES] delete elements for array favorites",

  loadingFavorites = "[FAVORITES] Loading for array favorites",
  loadingSuccessFavorites = "[FAVORITES] Loading success for array favorites",
  // initialErrorFavorites = "[FAVORITES] initial error for array favorites",

  changeFavorites = "[FAVORITES] change favorite for element array favorites"

}



export const favoritesAddElement = createAction(`${favoritesActionsType.addElementFavorites}`,
  props<{element: ProductInterface }>() );

export const favoritesAddElements = createAction(`${favoritesActionsType.addElementsFavorites}`,
  props<{array: ProductInterface[] }>() );

export const favoritesDeleteElement = createAction(`${favoritesActionsType.deleteElementFavorites}`, props<{element: ProductInterface }>() );

export const favoritesDeleteElements = createAction(`${favoritesActionsType.deleteElementsFavorites}`);



export const initializationFavoritesArray = createAction(`${favoritesActionsType.loadingFavorites}`);

export const favoritesInitializationSuccess = createAction(`${favoritesActionsType.loadingSuccessFavorites}`, props<{array: ProductInterface[] }>() );





