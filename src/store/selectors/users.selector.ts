import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from "../states/state-categories/user-state";


export const featureUsersSelector
  =  createFeatureSelector<UsersState>("users");

export const usersArraySelector = createSelector(
  featureUsersSelector,
  (state) => state.array);
