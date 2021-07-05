import { createReducer, on } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";


import { changeFavoriteGifts, loadingGifts, successfulLoadingGifts } from "../actions/gifts.actions";

import { changeFavoritePromotions, loadingPromotions, successfulLoadingPromotions } from "../actions/promotions.actions";
import { initializtionPromotionsState } from "../states/state-categories/promotions-state";



export const promotionsReducer = createReducer(
  initializtionPromotionsState,

  on(loadingPromotions, state => {
    return {...state};
  }),

  on(successfulLoadingPromotions, (state, action) => {
    return {...state, array: action.array};
  }),
  on(changeFavoritePromotions, (state, action) => {
    const modifiedArray: ProductInterface[] = [];

    state.array.forEach((elementArray) => {

      if (elementArray === action.element) {

        const objCopy: ProductInterface = Object.assign({}, elementArray);
        objCopy.favorite = !objCopy.favorite;
        modifiedArray.push(objCopy);
      } else { modifiedArray.push(elementArray); }
    });

    return {...state, array: modifiedArray};
  }),

);
