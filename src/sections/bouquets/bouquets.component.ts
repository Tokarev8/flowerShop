import { ChangeDetectorRef, Component } from "@angular/core";
import { ProductInterface } from "../../interfaces/product-state";
import { BouquetsService } from "./bouquets.service";

@Component({
  selector: "bouquets-component",
  templateUrl: "./bouquets.component.html",
  styleUrls: ["./bouquets.component.scss"]
})
export class BouquetsComponent  {

  public arrayBouquets: ProductInterface[] = [];

  constructor(public bouquetsService: BouquetsService, private ref: ChangeDetectorRef) {

    this.arrayBouquets = bouquetsService.copyArray;

  }


}

