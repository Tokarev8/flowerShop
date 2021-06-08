import { createReducer, on } from "@ngrx/store";
import {
  addElement,
  addElements,
  deleteElement,
  deleteElements,
  initialBouquets, initialSuccess,
  showElements
} from "../actions/bouquets.actions";
import { BouquetsState, initialBouquetsState } from "../states/state-categories/bouquets-state";
import { ProductInterface } from "../../interfaces/product-state";



const x: ProductInterface = {
  name: "BUKET",
  image: [],
  price: 100500,
  structure: "",
  description: "",
  id: "",
  categories: "",
  flowers: [],
  reason: [],
  popularity: 0,
  favorite: false,
};

const y: ProductInterface[] = [];
y.push(x);



export const bouquetsReducer = createReducer(
  initialBouquetsState,

  on(addElement, state => {
    let array: ProductInterface[] = [];
    if (state.array === undefined) {
      array.push(x);
    } else {
      array = state.array.map( (ele) => ele);
    array.push(x);
    }
    return {
      ...state,
      array: array
    };
    }),
  on(addElements, (state, action) => {
    return {...state, array: action.array};
  }),

  on(deleteElement, state => {
    const array = state.array.filter( (ele) => ele !== state.array[state.array.length - 1]);
    array.push(x);
    return {
      ...state,
      array: array
    };

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
  on(initialBouquets, state =>  {
    return {...state};
  }),

  on(initialSuccess, (state, action) =>  {
    return {...state, array: action.array};
  }),




);

/*
function xop (arrayOrigin: ProductInterface[] ): ProductInterface[] {

  const arrayDublicat: ProductInterface[] = [];

  arrayOrigin.forEach((item, index, array) => {
    arrayDublicat.push(item);
  });

  return arrayDublicat;
}*/
