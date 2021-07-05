import { Injectable } from "@angular/core";
import { initialStateProduct, ProductInterface } from "../../interfaces/product-state";


@Injectable()
export class ProductService {

  public product: ProductInterface = initialStateProduct;
  public mainImage: string = "";




}
