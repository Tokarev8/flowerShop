



import { createAction, props } from "@ngrx/store";

import { OrderInterface } from "../states/state-categories/orders-state";




export enum OrdersActionsType {
  LoadingOrders = "[ORDERS] Loading array orders from the server",
  LoadingSuccessOrders = "[ORDERS] Loading  array orders success from the server",
  // initialErrorOrders = "[ORDERS] initial error for array orders",
  AddOrder = "[ORDERS] add element for array orders",
  ChangeOrderStatus = "[ORDERS] change status for order",
}


export const loadingOrders = createAction(`${OrdersActionsType.LoadingOrders}`);

export const successfulLoadingOrders = createAction(`${OrdersActionsType.LoadingSuccessOrders}`, props<{orders: OrderInterface[] }>() );

export const addOrder = createAction(`${OrdersActionsType.AddOrder}`, props<{newElement: OrderInterface}>() );

export const changeOrder = createAction(`${OrdersActionsType.ChangeOrderStatus}`, props<{element: OrderInterface, statusNumber: number}>() );
