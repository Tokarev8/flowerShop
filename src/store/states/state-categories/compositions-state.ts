

import { ProductInterface } from "./product-state";

export interface CompositionsStateInterface {
  array: ProductInterface[];

}

export const  initialCompositionsState: CompositionsStateInterface = {
  array: []
};
