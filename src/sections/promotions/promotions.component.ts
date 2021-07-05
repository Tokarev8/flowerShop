import { Component } from "@angular/core";


import { PromotionsService } from "./promotions.service";


@Component({
  selector: "promotions-component",
  templateUrl: "./promotions.component.html",
  styleUrls: ["./promotions.component.scss"]
})
export class PromotionsComponent  {

  constructor(public promotionsService: PromotionsService) {


  }
}

