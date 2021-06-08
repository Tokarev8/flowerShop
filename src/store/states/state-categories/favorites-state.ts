import { ProductInterface } from "./product-state";


export interface FavoritesStateIntefrace {
  array: ProductInterface[];
  sizeArray: number;
}

export const initialFavoritesState: FavoritesStateIntefrace = {
  array: [],
  sizeArray: 0,
};
