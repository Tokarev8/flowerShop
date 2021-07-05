import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../states/state-categories/user-state";


export const featureUserSelector
  =  createFeatureSelector<UserState>("user");

export const userSelector = createSelector(
  featureUserSelector,
  (state) => state.user);
