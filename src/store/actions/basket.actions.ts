

import { createAction, props } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";
import { BasketInterface } from "../states/state-categories/basket-state";



export enum basketActionsType {
  SetBasketArray = "[BASKET] set array basket from user",
  // LoadingBasket = "[BASKET] Loading array basket from the server",
  // LoadingSuccessBasket = "[BASKET] Loading  array basket success from the server",
  // initialErrorBasket = "[BASKET] initial error for array basket",

  AddElementArray = "[BASKET] Add element to basket array",
  DeleteElementArray = "[BASKET] Delete element to basket array",

  IncreaseSumPrice = "[BASKET] Increase sumPrice basket",
  DecreaseSumPrice = "[BASKET] Decrease sumPrice basket",

  ChangeQuantity = "[BASKET] Change quantity element to basket array",

  CountingSumPrice = "[BASKET] Counting sum price to basket array",

  ClearBasket = "[BASKET] clear basket"

}


export const setBasketArray = createAction(`${basketActionsType.SetBasketArray}`, props<{array: BasketInterface[]}>());
// export const successfulLoadingBasket = createAction(`${basketActionsType.LoadingSuccessBasket}`, props<{array: BasketInterface[] }>() );

// export const changeFavoriteBasket = createAction(`${basketActionsType.changeFavoritesBasket}`, props<{element: BasketInterface}>() );

export const addElementBasket = createAction(`${basketActionsType.AddElementArray}`, props<{element: BasketInterface }>() );
export const deleteElementBasket = createAction(`${basketActionsType.DeleteElementArray}`, props<{id: string }>() );

export const increaseSumPrice = createAction(`${basketActionsType.IncreaseSumPrice}`, props<{price: number }>() );
export const decreaseSumPrice = createAction(`${basketActionsType.DecreaseSumPrice}`, props<{price: number }>() );

export const changeQuantityBasketArray = createAction(`${basketActionsType.ChangeQuantity}`, props<{element: BasketInterface }>() );


export const countingSumPrice = createAction(`${basketActionsType.CountingSumPrice}`, props<{array: BasketInterface[] }>() );

export const clearBasket = createAction(`${basketActionsType.ClearBasket}`);
