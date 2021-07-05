


import { Component, OnInit } from "@angular/core";

import { BasketInterface } from "../../store/states/state-categories/basket-state";
import { BasketService } from "./basket.service";


@Component({
  selector: "basket-component",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.scss", "./basket.style.scss"]
})
export class BasketComponent  {

  constructor(public basketService: BasketService) {
  }







  public decrise( element: BasketInterface ): void {
    if (element.quantity > 1) {
      const copyElement: BasketInterface =  Object.assign({}, element);
      copyElement.quantity--;
      this.basketService.changeQuantity(copyElement);
    }
  }


  public incrise( element: BasketInterface ): void {
    const copyElement: BasketInterface =  Object.assign({}, element);
    copyElement.quantity++;
    this.basketService.changeQuantity(copyElement);
  }


  public sumPriceArray (busketArray: BasketInterface): void {
    // this.basketArray.sumPriceArray = this.basketArray.productArray.reduce( (previousValue , array) => previousValue  + array.sumPrice, 0 );
  }





}

/*



 */
