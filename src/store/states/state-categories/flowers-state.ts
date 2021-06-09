
import { ProductInterface } from "../../../interfaces/product-state";

export interface FlowersStateInterface {
  array: ProductInterface[];

}

export const  initialFlowersState: FlowersStateInterface = {
  array: []
};
