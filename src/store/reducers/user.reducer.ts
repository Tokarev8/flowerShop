

import { createReducer, on } from "@ngrx/store";



import { ClearBasketArray, deleteBasketElement, setUser } from "../actions/user.actions";
import { Basket, initializtionUserState } from "../states/state-categories/user-state";


export const userReducer = createReducer(
  initializtionUserState,



  on(setUser, (state, action) => {
    return {...state, user: action.user};
  }),

  on(deleteBasketElement, (state, action) => {
    return {...state, user: action.user};
  }),

  on(ClearBasketArray, (state) => {
    const newUser = Object.assign({}, state.user);
    newUser.basked = [];
    return {...state, user: newUser};
  }),





);
