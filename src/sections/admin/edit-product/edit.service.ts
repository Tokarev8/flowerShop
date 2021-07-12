import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { initialStateProduct, ProductInterface } from "../../../interfaces/product-state";


@Injectable()
export class EditService {

  public product: ProductInterface = initialStateProduct;
  constructor(private http: HttpClient ) {
  }


}
