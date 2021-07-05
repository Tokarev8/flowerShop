import { Component } from "@angular/core";
import { ProductInterface } from "../../interfaces/product-state";
import { Url } from "../../interfaces/url";
import { LoadBackService } from "../../service/loadback.service";
import { MainService } from "../../service/main.service";

@Component({
  selector: "header-component",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss", "./header.style.scss"]
})
export class HeaderComponent {

  public switchBurger: boolean = false;

  constructor( private loadBackService: LoadBackService, private mainService: MainService) {
    console.log("");
  }



  goToBouquets(): void {
  this.mainService.setUrl(Url.bouquets);
  }

  goToFavorits(): void {
    this.mainService.setUrl(Url.favorites);
  }

  goToFlowers(): void {
    this.mainService.setUrl(Url.flowers);
  }


  burger(): void {
    this.switchBurger = !this.switchBurger;
  }
}
