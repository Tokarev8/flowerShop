import { createReducer, on } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";
import {
  addElement,
  addElements, bouquetsChangeElement,
  bouquetsChangeFavorites,
  deleteElement,
  deleteElements, initialSuccess,
  loadingBouquets,
  showElements,
} from "../actions/bouquets.actions";
import { initialBouquetsState } from "../states/state-categories/bouquets-state";






export const bouquetsReducer = createReducer(
  initialBouquetsState,

  on(addElement, state => {


    return {...state};
    }),
  on(addElements, (state, action) => {
    return {...state, array: action.array};
  }),

  on(deleteElement, state => {

    return {
      ...state,};

  }),

  on(deleteElements, state => {
    const array: ProductInterface[] = [];
    return {
      ...state,
      array: array
    };
  }),

  on(showElements, state => {
    return {...state};
  }),
  on(loadingBouquets, state =>  {
    return {...state};
  }),

  on(initialSuccess, (state, action) =>  {
    return {...state, array: action.array};
  }),


  on(bouquetsChangeFavorites, (state, action) =>  {

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

  on(bouquetsChangeElement, (state, action) =>  {
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




