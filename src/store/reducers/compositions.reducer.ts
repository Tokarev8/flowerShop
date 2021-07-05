import { createReducer, on } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";

import {
  changeFavoritesComposistions,
  compositionsChangeElement,
  loadingComposistions,
  successfulLoadingComposistions,
} from "../actions/compositions.actions";
import { changeFavoritesFlowers, loadingFlowers, successfulLoadingFlowers } from "../actions/flowers.actions";
import { inizializationCompositionState } from "../states/state-categories/compositions-state";
import { initialFlowersState } from "../states/state-categories/flowers-state";






export const compositionsReducer = createReducer(
  inizializationCompositionState,

  on(loadingComposistions, state => {
    return {...state};
  }),

  on(successfulLoadingComposistions, (state, action) => {
    return {...state, array: action.array};
  }),
  on(changeFavoritesComposistions, (state, action) => {
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

  on(compositionsChangeElement, (state, action) =>  {
    const modifiedArray: ProductInterface[] = [];

    state.array.forEach((elementArray) => {

      if (elementArray._id === action.newElement._id) {

        const newObj: ProductInterface = Object.assign({}, action.newElement);
        modifiedArray.push(newObj);
      } else { modifiedArray.push(elementArray); }
    });
    return {...state, array: modifiedArray};
  }),




);
