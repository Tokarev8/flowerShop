import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductInterface } from "../../interfaces/product-state";

import { Store } from "@ngrx/store";


import { popularArraySelector } from "../../store/selectors/popular.selector";



@Injectable()
export class PopularService {

  public originalArray: ProductInterface[] = [];
  public copyArray: ProductInterface[] = [];
  public popular$: Observable<ProductInterface[]> = this.store.select(popularArraySelector);


  constructor(public store: Store) {
    this.popular$.subscribe( array => {
      this.originalArray = array;
      this.copyArray = this.originalArray.map((element: ProductInterface) => element);
    });
  }

}
