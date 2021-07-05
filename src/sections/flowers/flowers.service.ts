import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductInterface } from "../../interfaces/product-state";

import { Store } from "@ngrx/store";
import { favoritesArraySelector } from "../../store/selectors/favorites.selector";
import { flowersArraySelector } from "../../store/selectors/flowers.selector";



@Injectable()
export class FlowersService {

  public originalArray: ProductInterface[] = [];
  public copyArray: ProductInterface[] = [];

  public flowers$: Observable<ProductInterface[]> = this.store.select(flowersArraySelector);


  constructor(public store: Store) {
    this.flowers$.subscribe( array => {
      this.originalArray = array;
      this.copyArray = this.originalArray.map((element: ProductInterface) => element);

    });
  }

}
