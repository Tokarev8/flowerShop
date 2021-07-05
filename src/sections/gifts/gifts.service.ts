import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductInterface } from "../../interfaces/product-state";

import { Store } from "@ngrx/store";

import { giftsArraySelector } from "../../store/selectors/gifts.selector";
import {MenuService} from "../show-products/menu/menu.service";



@Injectable()
export class GiftsService {

  public originalArray: ProductInterface[] = [];
  public copyArray: ProductInterface[] = [];
  public gifts$: Observable<ProductInterface[]> = this.store.select(giftsArraySelector);


  constructor(public store: Store,  public menuService: MenuService) {
    this.gifts$.subscribe( array => {
      this.originalArray = array;
      this.copyArray = this.originalArray.map((element: ProductInterface) => element);
    });
    menuService.subject$.subscribe( () => {
      this.copyArray = this.originalArray;
      this.copyArray = this.menuService.mainFilter(this.copyArray);
    });
  }

}
