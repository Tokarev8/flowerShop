import { createReducer, on } from "@ngrx/store";



import {
  addElementBasket, changeQuantityBasketArray, clearBasket, countingSumPrice, decreaseSumPrice,
  deleteElementBasket,
  increaseSumPrice,
   setBasketArray,
} from "../actions/basket.actions";
import { BasketInterface, initializationProductBasket } from "../states/state-categories/basket-state";



export const basketReducer = createReducer(
  initializationProductBasket,

  // on(loadingBasket, state => {
  //   return {...state};
  // }),
  //
  // on(successfulLoadingBasket, (state, action) => {
  //   return {...state, array: action.array};
  // }),

  on(addElementBasket, (state, action) => {
    const array: BasketInterface[] = state.array.map((el) => el);
    array.push(action.element);
    return {...state, array: array};
  }),

  on(deleteElementBasket, (state, action) => {
    const array: BasketInterface[] = [] ;
      state.array.forEach( (element) => {
        if ( element._id !== action.id ) {array.push(element); }
      });
    return {...state, array: array};
  }),


  on(increaseSumPrice, (state, action) => {
    console.log(action.price);
    const sumPrice: number = state.sumPrice + action.price;
    return {...state, sumPrice: sumPrice};
  }),

  on(decreaseSumPrice, (state, action) => {
    const sumPrice: number = state.sumPrice - action.price;
    return {...state, sumPrice: sumPrice};
  }),

  on(changeQuantityBasketArray, (state, action) => {
    const array: BasketInterface[] = [] ;
    state.array.forEach( (element) => {
      if ( element._id === action.element._id ) {
        array.push(action.element); } else {
        array.push(element); }
    });
    return {...state, array: array};
  }),
  on(countingSumPrice, (state, action) => {
    let sumPrice: number = 0;
    action.array.forEach( (element) => {
      sumPrice += element.price * element.quantity; });
    return {...state, sumPrice: sumPrice};
  }),

  on(clearBasket, (state) => {
    return {...state, array: []};
  }),

  on(setBasketArray, (state, action) => {
    return {...state, array: action.array};
  }),






);
