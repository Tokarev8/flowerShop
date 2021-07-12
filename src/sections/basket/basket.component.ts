

import { Component, OnInit } from "@angular/core";
import { BasketService } from "./basket.service";


@Component({
  selector: "basket-component",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.scss", "./basket.style.scss"]
})
export class BasketComponent  {

  constructor(public basketService: BasketService) {
  }
}

