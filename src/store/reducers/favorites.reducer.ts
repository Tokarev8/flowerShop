
import { createReducer, on } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";

import {
  favoritesAddElement, favoritesDeleteElement,
  favoritesInitializationSuccess,
  initializationFavoritesArray,
} from "../actions/favorites.actions";

import { initialFavoritesState } from "../states/state-categories/favorites-state";


export const favoritesReducer = createReducer(

  initialFavoritesState,

  on(initializationFavoritesArray, state =>  {
    return {...state};
  }),

  on(favoritesInitializationSuccess, (state, action) =>  {
    return {...state, array: action.array};
  }),

  on(favoritesAddElement, (state, action) =>  {
   const modifArray: ProductInterface [] = state.array.map((val) => val);
    modifArray.push(action.element);

    return {...state, array: modifArray};
  }),

  on(favoritesDeleteElement, (state, action) =>  {
    const modifArray: ProductInterface [] = [];

      state.array.forEach((val) => {
        if (val !== action.element) {
          modifArray.push(val);
        } else {}
      });
    return {...state, array: modifArray};
  }),




);
