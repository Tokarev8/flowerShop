import { createReducer, on } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";


import { changeFavoriteGifts, giftsChangeElement, loadingGifts, successfulLoadingGifts } from "../actions/gifts.actions";
import { inizializationGiftsState } from "../states/state-categories/gifts-state";







export const giftsReducer = createReducer(
  inizializationGiftsState,

  on(loadingGifts, state => {
    return {...state};
  }),

  on(successfulLoadingGifts, (state, action) => {
    return {...state, array: action.array};
  }),
  on(changeFavoriteGifts, (state, action) => {
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

  on(giftsChangeElement, (state, action) =>  {
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
