
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ArrayBasketInterface } from "../states/state-categories/basket-state";


export const featureBasketSelector
  =  createFeatureSelector<ArrayBasketInterface>("basket");

export const basketArraySelector = createSelector(
  featureBasketSelector,
  (state) => state.array);

export const basketSumPriceSelector = createSelector(
  featureBasketSelector,
  (state) => state.sumPrice);
