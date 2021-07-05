

import { ProductInterface } from "../../../interfaces/product-state";

export interface CompositionStateInterface {
  array: ProductInterface[];

}

export const  inizializationCompositionState: CompositionStateInterface = {
  array: []
};
