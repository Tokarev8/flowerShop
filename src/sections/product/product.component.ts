
import {ChangeDetectorRef, Component, Input, OnInit} from "@angular/core";

import { ProductInterface } from "../../interfaces/product-state";
import { MainService } from "../../service/main.service";
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
) {
  console.log(this.productService.product);
}




  public buyProduct(): void {  // Метод который добавляет товар в корзину, и  переходит в корзину пользователя
    console.log("buyProduct");
  }

  public addFavorites(): void  {  // метод добавляющий товар в избранное
    console.log("addFavorites");
  }

  changeMainImg (img: string): void {
  this.productService.mainImage = img;
  }

  addFavorite(product: ProductInterface): void {
    this.mainService.addFavorite(product);
    const objCopy: ProductInterface = Object.assign({}, product);
    objCopy.favorite = !objCopy.favorite;
    this.productService.product = objCopy;

  }

  goToEdit(): void {
    // this.productService.product
  }
}



// Компонент который получает на вход данные о товаре
// выводит их
// и позволяет добавить в корзину и купить  , в избранные


