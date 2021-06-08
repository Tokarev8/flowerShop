
import { Component, Input, OnInit } from "@angular/core";
import { originalArrayBouquets } from "../array-product/bouquets";
import { ProductInterface } from "../store/states/product-state";

@Component({
  selector: "product-component",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @Input() product: ProductInterface | undefined ;

  public thisProduct: ProductInterface = originalArrayBouquets[0];

  ngOnInit(): void {

    if (this.product !== undefined) {
      this.thisProduct = this.product;

    }


  }

  public buyProduct(): void {  // Метод который добавляет товар в корзину, и  переходит в корзину пользователя
    console.log("buyProduct");
  }

  public addFavorites(): void  {  // метод добавляющий товар в избранное
    console.log("addFavorites");
  }
}



// Компонент который получает на вход данные о товаре
// выводит их
// и позволяет добавить в корзину и купить  , в избранные


