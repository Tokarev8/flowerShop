import { ProductInterface } from "./product-state";

export interface BouquetsState {
  array: ProductInterface[];
}

export const  initialBouquetsState: BouquetsState = {
  array: []
};
