import {
  ActionReducerMap,
  MetaReducer,
} from "@ngrx/store";

import { environment } from "../../environments/environment";
import { BasketInterface } from "../states/state-categories/basket-state";
import { BouquetsState } from "../states/state-categories/bouquets-state";
import { CompositionsStateInterface } from "../states/state-categories/compositions-state";
import { FavoritesStateIntefrace } from "../states/state-categories/favorites-state";
import { FlowersStateInterface } from "../states/state-categories/flowers-state";
import { GiftsStateInterface } from "../states/state-categories/gifts-state";
import { PopularsStateInterface } from "../states/state-categories/populars-state";
import { PromotionsStateInterface } from "../states/state-categories/promotions-state";
import { bouquetsReducer } from "./bouquets.reducer";




export interface State {
  bouquets: BouquetsState;
  // flowersArray: FlowersStateInterface;
  // compositionsArray: CompositionsStateInterface;
  // giftsArray: GiftsStateInterface;
  // promotionsArray: PromotionsStateInterface;
  // favoritesArray: FavoritesStateIntefrace;
  // basketArray: BasketInterface;
  // popularArray: PopularsStateInterface;
}



export const reducers: ActionReducerMap<State> = {
  bouquets: bouquetsReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
