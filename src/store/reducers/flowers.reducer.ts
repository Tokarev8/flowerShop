import { createReducer, on } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";

import { changeFavoritesFlowers, flowersChangeElement, loadingFlowers, successfulLoadingFlowers } from "../actions/flowers.actions";
import { initialFlowersState } from "../states/state-categories/flowers-state";







export const flowersReducer = createReducer(
  initialFlowersState,

  on(loadingFlowers, state => {
    return {...state};
  }),

  on(successfulLoadingFlowers, (state, action) => {
    return {...state, array: action.array};
  }),
  on(changeFavoritesFlowers, (state, action) => {
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

  on(flowersChangeElement, (state, action) =>  {
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
