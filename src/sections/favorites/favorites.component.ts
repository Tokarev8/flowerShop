
import { Component, OnInit } from "@angular/core";
import { originalArrayBouquets } from "../../test/array-product/bouquets";
import { ProductInterface } from "../../interfaces/product-state";

@Component({
  selector: "favorites-component",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"]
})
export class FavoritesComponent implements OnInit {
  // данный компонент выводит елементы из массива favorites (который в сторе) их можно купить, удалить и пожалуй всё
  // эмалюция массива


  public favorites: ProductInterface[] = originalArrayBouquets;



  ngOnInit(): void {

  }


  deleteElement(element: ProductInterface): void {
  this.favorites = this.favorites.filter((x) => x !== element);
  }

  buyFavoritesElement(element: ProductInterface): void {
// добавление данного елемента в массив корзины, если его там нету и переход на сыллку коризны
  }
}
