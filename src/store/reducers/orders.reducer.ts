import { createReducer, on } from "@ngrx/store";
import {addOrder, changeOrder, loadingOrders, successfulLoadingOrders} from "../actions/orders.action";
import { initializeOrderState, OrderInterface } from "../states/state-categories/orders-state";





export const ordersReducer = createReducer(
  initializeOrderState,

  on(loadingOrders, state => {
    return {...state};
  }),

  on(successfulLoadingOrders, (state, action) => {
    return {...state, orders: action.orders};
  }),

  on(addOrder, (state, action) => {
    const newArray: OrderInterface[] = state.orders.map((el) => el);
    newArray.push(action.newElement);
    return {...state, orders: newArray};
  }),



  on(changeOrder, (state, action) => {


    const newArray: OrderInterface[] = [];



  state.orders.forEach( (element) => {
    if (element.number === action.element.number) {
      const obj: OrderInterface = Object.assign({}, element);
      obj.status = action.statusNumber;
      newArray.push(obj);
    } else { newArray.push(element); }
  });
    return {...state, orders: newArray};
  }),

);
