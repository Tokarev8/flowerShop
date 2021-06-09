import { BasketInterface, initialBasketState } from "./state-categories/basket-state";
import { BouquetsState, initialBouquetsState } from "./state-categories/bouquets-state";
import { CompositionsStateInterface, initialCompositionsState } from "./state-categories/compositions-state";
import { FavoritesStateIntefrace, initialFavoritesState } from "./state-categories/favorites-state";
import { FlowersStateInterface, initialFlowersState } from "./state-categories/flowers-state";
import { GiftsStateInterface, initialGiftsState } from "./state-categories/gifts-state";
import { initialPopularsState, PopularsStateInterface } from "./state-categories/populars-state";
import { initialPromotionsState, PromotionsStateInterface } from "./state-categories/promotions-state";


export interface StoreState {
  bouquetsArray: BouquetsState;
  flowersArray: FlowersStateInterface;
  compositionsArray: CompositionsStateInterface;
  giftsArray: GiftsStateInterface;
  promotionsArray: PromotionsStateInterface;
  favoritesArray: FavoritesStateIntefrace;
  basketArray: BasketInterface;
  popularArray: PopularsStateInterface;
}

export const initialStoreState: StoreState = {
  bouquetsArray: initialBouquetsState,
  flowersArray: initialFlowersState,
  compositionsArray: initialCompositionsState,
  giftsArray: initialGiftsState,
  promotionsArray: initialPromotionsState,
  favoritesArray: initialFavoritesState,
  basketArray: initialBasketState,
  popularArray: initialPopularsState,
};

