import { createReducer, on } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";

import { changeFavoritePopular, loadingPopular, successfulLoadingPopular} from "../actions/popular.actions";
import { initialPopularsState } from "../states/state-categories/populars-state";






export const popularReducer = createReducer(
  initialPopularsState,

  on(loadingPopular, state => {
    return {...state};
  }),

  on(successfulLoadingPopular, (state, action) => {
    return {...state, array: action.array};
  }),
  on(changeFavoritePopular, (state, action) => {
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
