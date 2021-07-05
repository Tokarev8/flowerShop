import { ChangeDetectorRef, Component } from "@angular/core";
import { Url } from "../../interfaces/url";
import { MainService } from "../../service/main.service";
import { BouquetsService } from "./bouquets.service";
import {ProductInterface} from "../../interfaces/product-state";

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
// данный компонент выводит елементы из массива favorites (который в сторе) их можно купить, удалить и пожалуй всё
// эмалюция массива
