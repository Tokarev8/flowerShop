


import { Component, OnInit } from "@angular/core";
import { originalArrayBouquets } from "../array-product/bouquets";
import { BasketInterface, ProductBasketInterface } from "../store/states/basket-state";
import { ProductInterface } from "../store/states/product-state";

@Component({
  selector: "basket-component",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.scss"]
})
export class BasketComponent  {


  public basketProduct: ProductBasketInterface = {
    product: originalArrayBouquets[0],
    quantity: 1,
    sumPrice: originalArrayBouquets[0].price
  };


  public basketArray: BasketInterface = {
    productArray: [],
    sumPriceArray: 0
  };


  constructor() {



    this.basketArray.productArray.push(this.basketProduct);
    this.basketProduct = {
      product: originalArrayBouquets[1],
      quantity: 1,
      sumPrice: originalArrayBouquets[1].price
    };
    this.basketArray.productArray.push(this.basketProduct);



    this.basketProduct = {
      product: originalArrayBouquets[2],
      quantity: 1,
      sumPrice: originalArrayBouquets[2].price
    };
    this.basketArray.productArray.push(this.basketProduct);


    this.basketProduct = {
      product: originalArrayBouquets[3],
      quantity: 1,
      sumPrice: originalArrayBouquets[3].price
    };
    this.basketArray.productArray.push(this.basketProduct);


  }


  public decrise( element: ProductBasketInterface ): void {
    if (element.quantity > 0 ) {
    element.quantity--;
    element.sumPrice = element.quantity * element.product.price;
    this.sumPriceArray(this.basketArray);
    }
  }

  public incrise( element: ProductBasketInterface ): void {
    // element.quantity++;
    element.quantity = element.quantity + 1;
    element.sumPrice = element.quantity * element.product.price;
    this.sumPriceArray(this.basketArray);

  }


  public sumPriceArray (busketArray: BasketInterface): void {
    this.basketArray.sumPriceArray = this.basketArray.productArray.reduce( (previousValue , array) => previousValue  + array.sumPrice, 0 );
  }


}
