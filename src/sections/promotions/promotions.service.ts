import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductInterface } from "../../interfaces/product-state";

import { Store } from "@ngrx/store";


import { promotionsArraySelector } from "../../store/selectors/promotions.selector";



@Injectable()
export class PromotionsService {

  public originalArray: ProductInterface[] = [];
  public copyArray: ProductInterface[] = [];
  public promotions$: Observable<ProductInterface[]> = this.store.select(promotionsArraySelector);


  constructor(public store: Store) {
    this.promotions$.subscribe( array => {
      this.originalArray = array;
      this.copyArray = this.originalArray.map((element: ProductInterface) => element);
    });
  }

}
