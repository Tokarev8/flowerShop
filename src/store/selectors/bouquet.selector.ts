import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BouquetsState } from "../states/state-categories/bouquets-state";


export const featureBouquetsSelector
  =  createFeatureSelector<BouquetsState>("bouquets");

export const bouquetsArraySelector = createSelector(
  featureBouquetsSelector,
  (state) => state.array);
