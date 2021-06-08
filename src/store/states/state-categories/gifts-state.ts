

import { ProductInterface } from "./product-state";

export interface GiftsStateInterface {
  array: ProductInterface[];

}

export const  initialGiftsState: GiftsStateInterface = {
  array: []
};
