

import { createReducer, on } from "@ngrx/store";



import { setUser } from "../actions/user.actions";
import { initializtionUserState } from "../states/state-categories/user-state";


export const userReducer = createReducer(
  initializtionUserState,



  on(setUser, (state, action) => {
    return {...state, user: action.user};
  }),
);
