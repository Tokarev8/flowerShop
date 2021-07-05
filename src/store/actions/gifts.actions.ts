

import { createAction, props } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";




export enum giftsActionsType {
  LoadingGifts = "[GIFTS] Loading array gifts from the server",
  LoadingSuccessGifts = "[GIFTS] Loading  array gifts success from the server",
  // initialErrorGifts = "[GIFTS] initial error for array gifts",
  changeFavoritesGifts = "[GIFTS] change parameter favorites, for element array gifts",

  changeGifts = "[GIFTS] change  element for array gifts",
}


export const loadingGifts = createAction(`${giftsActionsType.LoadingGifts}`);

export const successfulLoadingGifts = createAction(`${giftsActionsType.LoadingSuccessGifts}`, props<{array: ProductInterface[] }>() );

export const changeFavoriteGifts = createAction(`${giftsActionsType.changeFavoritesGifts}`, props<{element: ProductInterface}>() );

export const giftsChangeElement = createAction(`${giftsActionsType.changeGifts}`, props<{newElement: ProductInterface}>() );
