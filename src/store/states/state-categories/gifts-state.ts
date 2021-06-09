

import { ProductInterface } from "../../../interfaces/product-state";

export interface GiftsStateInterface {
  array: ProductInterface[];

}

export const  initialGiftsState: GiftsStateInterface = {
  array: []
};
