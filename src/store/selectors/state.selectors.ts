import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BasketInterface } from "../states/state-categories/basket-state";
import { BouquetsState } from "../states/state-categories/bouquets-state";
import { CompositionsStateInterface } from "../states/state-categories/compositions-state";
import { FavoritesStateIntefrace } from "../states/state-categories/favorites-state";
import { FlowersStateInterface } from "../states/state-categories/flowers-state";
import { GiftsStateInterface } from "../states/state-categories/gifts-state";
import { PromotionsStateInterface } from "../states/state-categories/promotions-state";
import { StoreState } from "../states/store-state";



/*

export const selectStateFeature = createFeatureSelector<StoreState>("state");

// Селекторы на получение данных к массивам

export const selectBouquetsArray = createSelector(
  selectStateFeature,
  (state): BouquetsStateInterface => state.bouquetsArray);

export const selectFlowersArray = createSelector(
  selectStateFeature,
  (state): FlowersStateInterface => state.flowersArray);

export const selectCompositionsArray = createSelector(
  selectStateFeature,
  (state): CompositionsStateInterface => state.compositionsArray);

export const selectGiftsArray = createSelector(
  selectStateFeature,
  (state): GiftsStateInterface => state.giftsArray);

export const selectPromotionsArray = createSelector(
  selectStateFeature,
  (state): PromotionsStateInterface => state.promotionsArray);

export const selectFavoritesArray = createSelector(
  selectStateFeature,
  (state): FavoritesStateIntefrace => state.favoritesArray);

export const selectBasketArray = createSelector(
  selectStateFeature,
  (state): BasketInterface => state.basketArray);
*/
