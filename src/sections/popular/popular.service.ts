import { Injectable } from "@angular/core";

import { ProductInterface } from "../../interfaces/product-state";




@Injectable()
export class PopularService {

  public originalArray: ProductInterface[] = [];
  public copyArray: ProductInterface[] = [];


}
