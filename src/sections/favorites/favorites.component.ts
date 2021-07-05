
import { Component, OnInit } from "@angular/core";
import { ProductInterface } from "../../interfaces/product-state";
import { Url } from "../../interfaces/url";
import { MainService } from "../../service/main.service";
import { FavoritesService } from "./favorites.service";


@Component({
  selector: "favorites-component",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"]
})
export class FavoritesComponent implements OnInit {


  constructor(public favoriteService: FavoritesService) {


  }


  ngOnInit(): void {

  }

}
