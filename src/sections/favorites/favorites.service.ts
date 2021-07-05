import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductInterface } from "../../interfaces/product-state";

import { Store } from "@ngrx/store";
import { favoritesArraySelector } from "../../store/selectors/favorites.selector";



@Injectable()
export class FavoritesService {

  public originalArray: ProductInterface[] = [];
  public copyArray: ProductInterface[] = [];

  public faorites$: Observable<ProductInterface[]> = this.store.select(favoritesArraySelector);


  constructor(public store: Store) {
    this.faorites$.subscribe( array => {
      this.originalArray = array;
      this.copyArray = this.originalArray.map((element: ProductInterface) => element);

    });
  }

}
