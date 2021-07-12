import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ProductInterface } from "../../interfaces/product-state";
import { bouquetsArraySelector } from "../../store/selectors/bouquet.selector";
import { MenuService } from "../show-products/menu/menu.service";



@Injectable()
export class BouquetsService {

  public originalArray: ProductInterface[] = [];
  public copyArray: ProductInterface[] = [];

  public bouquets$: Observable<ProductInterface[]> = this.store.select(bouquetsArraySelector);


  constructor(public store: Store, public menuService: MenuService) {
    this.bouquets$.subscribe( array => {
      this.originalArray = array;
      this.copyArray = this.originalArray.map((element: ProductInterface) => element);
    });

    menuService.subject$.subscribe( () => {
      this.copyArray = this.originalArray;
      this.copyArray = this.menuService.mainFilter(this.copyArray);
    });

  }



}
