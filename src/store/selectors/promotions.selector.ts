


import { createFeatureSelector, createSelector } from "@ngrx/store";

import { GiftsStateInterface } from "../states/state-categories/gifts-state";
import { PromotionsStateInterface } from "../states/state-categories/promotions-state";


export const featurePromotionsSelector
  =  createFeatureSelector<PromotionsStateInterface>("promotions");

export const promotionsArraySelector = createSelector(
  featurePromotionsSelector,
  (state) => state.array);
