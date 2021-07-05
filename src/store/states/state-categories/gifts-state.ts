

import { ProductInterface } from "../../../interfaces/product-state";

export interface GiftsStateInterface {
  array: ProductInterface[];

}

export const  inizializationGiftsState: GiftsStateInterface = {
  array: []
};
