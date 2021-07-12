
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { FavoritesService } from "./favorites.service";


@Component({
  selector: "favorites-component",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"]
})
export class FavoritesComponent implements OnInit {


  constructor(public favoriteService: FavoritesService, private store: Store) {
  }


  ngOnInit(): void {

  }

}
