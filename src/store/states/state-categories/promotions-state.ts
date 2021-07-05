
import { ProductInterface } from "../../../interfaces/product-state";

export interface PromotionsStateInterface {
  array: ProductInterface[];

}

export const  initializtionPromotionsState: PromotionsStateInterface = {
  array: []
};
