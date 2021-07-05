


import { createFeatureSelector, createSelector } from "@ngrx/store";


import { PopularsStateInterface } from "../states/state-categories/populars-state";


export const featurePopularSelector
  =  createFeatureSelector<PopularsStateInterface>("popular");

export const popularArraySelector = createSelector(
  featurePopularSelector,
  (state) => state.array);
