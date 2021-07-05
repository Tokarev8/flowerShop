


import { createFeatureSelector, createSelector } from "@ngrx/store";

import { GiftsStateInterface } from "../states/state-categories/gifts-state";


export const featureGiftsSelector
  =  createFeatureSelector<GiftsStateInterface>("gifts");

export const giftsArraySelector = createSelector(
  featureGiftsSelector,
  (state) => state.array);
