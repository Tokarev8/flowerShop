

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FlowersStateInterface } from "../states/state-categories/flowers-state";


export const featureFlowersSelector
  =  createFeatureSelector<FlowersStateInterface>("flowers");

export const flowersArraySelector = createSelector(
  featureFlowersSelector,
  (state) => state.array);
