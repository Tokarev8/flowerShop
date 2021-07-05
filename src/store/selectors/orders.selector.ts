



import { createFeatureSelector, createSelector } from "@ngrx/store";

import { OrdersState } from "../states/state-categories/orders-state";


export const featureOrdersSelector
  =  createFeatureSelector<OrdersState>("orders");

export const ordersArraySelector = createSelector(
  featureOrdersSelector,
  (state) => state.orders);
