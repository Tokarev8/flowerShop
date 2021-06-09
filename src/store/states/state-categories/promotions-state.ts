
import { ProductInterface } from "../../../interfaces/product-state";

export interface PromotionsStateInterface {
  array: ProductInterface[];

}

export const  initialPromotionsState: PromotionsStateInterface = {
  array: []
};
