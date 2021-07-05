import { createReducer, on } from "@ngrx/store";


import { loadingUsers, successfulLoadingUsers } from "../actions/users.actions";
import { initializtionUsersState } from "../states/state-categories/user-state";


export const usersReducer = createReducer(
  initializtionUsersState,

  on(loadingUsers, state => {
    return {...state};
  }),

  on(successfulLoadingUsers, (state, action) => {
    return {...state, array: action.array};
  }),
);
