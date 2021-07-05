

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FavoritesStateIntefrace } from "../states/state-categories/favorites-state";


export const featureFavoritesSelector
  =  createFeatureSelector<FavoritesStateIntefrace>("favorites");

export const favoritesArraySelector = createSelector(
  featureFavoritesSelector,
  (state) => state.array);
