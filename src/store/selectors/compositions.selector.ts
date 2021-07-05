


import { createFeatureSelector, createSelector } from "@ngrx/store";

import { CompositionStateInterface } from "../states/state-categories/compositions-state";


export const featureCompositionsSelector
  =  createFeatureSelector<CompositionStateInterface>("compositions");

export const compositionsArraySelector = createSelector(
  featureCompositionsSelector,
  (state) => state.array);
