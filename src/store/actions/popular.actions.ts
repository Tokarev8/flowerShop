
import { createAction, props } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";



export enum popularActionsType {
  LoadingPopular = "[GIFTS] Loading array popular from the server",
  LoadingSuccessPopular = "[GIFTS] Loading  array popular success from the server",
  // initialErrorPopular = "[GIFTS] initial error for array popular",
  ChangeFavoritesPopular = "[GIFTS] change parameter favorites, for element array popular",
}


export const loadingPopular = createAction(`${popularActionsType.LoadingPopular}`);

export const successfulLoadingPopular = createAction(`${popularActionsType.LoadingSuccessPopular}`, props<{array: ProductInterface[] }>() );

export const changeFavoritePopular = createAction(`${popularActionsType.ChangeFavoritesPopular}`, props<{element: ProductInterface}>() );
