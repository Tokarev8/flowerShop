
import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { ProductInterface } from "../../interfaces/product-state";
import { MainService } from "../../service/main.service";
import { BasketService } from "../basket/basket.service";
import { FavoritesService } from "../favorites/favorites.service";
import { ProductService } from "./product.service";

@Component({
  selector: "product-component",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss", "./product.style.scss"]
})
export class ProductComponent {

constructor(public productService: ProductService,
            public mainService: MainService,
            private ref: ChangeDetectorRef,
            private favoritesService: FavoritesService,
            private basketService: BasketService,
            private router: Router,
) {

}




  public buyProduct(product: ProductInterface): void {
    if (product.name !== "") {
      this.basketService.addElement(product);
      this.router.navigate(["/basket"]);
    }
  }

  changeMainImg (img: string): void {
  this.productService.mainImage = img;
  }

  addFavorite(product: ProductInterface): void {
    if (product.name !== "") {
      this.favoritesService.addFavorite(product);
      const objCopy: ProductInterface = Object.assign({}, product);
      objCopy.favorite = !objCopy.favorite;
      this.productService.product = objCopy;
    }
  }
}

