import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";

import { environment } from "../../environments/environment";
import { BasketInterface } from "../states/basket-state";
import { BouquetsStateInterface } from "../states/bouquets-state";
import { CompositionsStateInterface } from "../states/compositions-state";
import { FavoritesStateIntefrace } from "../states/favorites-state";
import { FlowersStateInterface } from "../states/flowers-state";
import { GiftsStateInterface } from "../states/gifts-state";
import { PromotionsStateInterface } from "../states/promotions-state";

// tslint:disable-next-line:no-empty-interface
export interface State {

}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
