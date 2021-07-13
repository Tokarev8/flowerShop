import { Component } from "@angular/core";
import { ProductService } from "../product/product.service";


@Component({
  selector: "similar-products",
  templateUrl: "./similar-products.component.html",
  styleUrls: ["./similar-products.component.scss", ]
})
export class SimilarProductsComponent {
  constructor(private productService: ProductService) {


  }

}
