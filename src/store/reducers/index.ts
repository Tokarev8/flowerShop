import {
  ActionReducerMap,
  MetaReducer,
} from "@ngrx/store";

import { environment } from "../../environments/environment";
import { ArrayBasketInterface } from "../states/state-categories/basket-state";
import { BouquetsState } from "../states/state-categories/bouquets-state";
import { CompositionStateInterface } from "../states/state-categories/compositions-state";
import { FavoritesStateIntefrace } from "../states/state-categories/favorites-state";
import { FlowersStateInterface } from "../states/state-categories/flowers-state";
import { GiftsStateInterface } from "../states/state-categories/gifts-state";
import { OrdersState } from "../states/state-categories/orders-state";
import { PopularsStateInterface } from "../states/state-categories/populars-state";
import { PromotionsStateInterface } from "../states/state-categories/promotions-state";
import { UsersState, UserState } from "../states/state-categories/user-state";
import { basketReducer } from "./basket.reducer";
import { bouquetsReducer } from "./bouquets.reducer";
import { compositionsReducer } from "./compositions.reducer";
import { favoritesReducer } from "./favorites.reducer";
import { flowersReducer } from "./flowers.reducer";
import { giftsReducer } from "./gifts.reducer";
import { ordersReducer } from "./orders.reducer";
import { popularReducer } from "./popular.reducer";
import { promotionsReducer } from "./promotions.reducer";
import { userReducer } from "./user.reducer";
import { usersReducer } from "./users.reducer";



export interface State {
  bouquets: BouquetsState;
  flowers: FlowersStateInterface;
  compositions: CompositionStateInterface;
  gifts: GiftsStateInterface;
  promotions: PromotionsStateInterface;
  favorites: FavoritesStateIntefrace;
  basket: ArrayBasketInterface;
  popular: PopularsStateInterface;
  users: UsersState;
  user: UserState;
  orders: OrdersState;
}



export const reducers: ActionReducerMap<State> = {
  bouquets: bouquetsReducer,
  flowers: flowersReducer,
  favorites: favoritesReducer,
  compositions: compositionsReducer,
  gifts: giftsReducer,
  promotions: promotionsReducer,
  basket: basketReducer,
  popular: popularReducer,
  users: usersReducer,
  user: userReducer,
  orders: ordersReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
