
import { ProductInterface } from "../../../interfaces/product-state";

export interface PopularsStateInterface {
  array: ProductInterface[];

}

export const  initialPopularsState: PopularsStateInterface = {
  array: []
};
