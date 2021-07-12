import { createReducer, on } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";

import {
  changeFavoritesFlowers, favoritesTrue,
  flowersChangeElement,
  loadingFlowers,
  setFlowersArray,
  successfulLoadingFlowers
} from "../actions/flowers.actions";
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

      if (elementArray._id === action.element._id) {

        const objCopy: ProductInterface = Object.assign({}, elementArray);
        objCopy.favorite = !objCopy.favorite;
        console.log("элемент поменяли в редюсере", objCopy.favorite);
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

  on(setFlowersArray, (state, action) =>  {
    return {...state, array: action.newArray};
  }),

  on(favoritesTrue, (state, action) =>  {
    const newArray: ProductInterface [] = [];
    state.array.forEach( el => {
      if ( el._id === action.newElement._id) {
        let changeElement: ProductInterface = Object.assign({}, el);
        console.log("DO", changeElement.favorite);
        changeElement.favorite = true;
        console.log("POSLE", changeElement.favorite);
        newArray.push(changeElement);
      } else {newArray.push(el); }
    });
    return {...state, array: newArray};
  }),





);
