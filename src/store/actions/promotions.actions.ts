

import { createAction, props } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";



export enum promotionsActionsType {
  LoadingPromotions = "[PROMOTIONS] Loading array promotions from the server",
  LoadingSuccessPromotions = "[PROMOTIONS] Loading  array promotions success from the server",
  // initialErrorPromotions = "[PROMOTIONS] initial error for array promotions",
  changeFavoritesPromotions = "[PROMOTIONS] change parameter favorites, for element array promotions",
}


export const loadingPromotions = createAction(`${promotionsActionsType.LoadingPromotions}`);

export const successfulLoadingPromotions = createAction(`${promotionsActionsType.LoadingSuccessPromotions}`, props<{array: ProductInterface[] }>() );

export const changeFavoritePromotions = createAction(`${promotionsActionsType.changeFavoritesPromotions}`, props<{element: ProductInterface}>() );
