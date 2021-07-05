import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductInterface } from "../../interfaces/product-state";

import { Store } from "@ngrx/store";
import { compositionsArraySelector } from "../../store/selectors/compositions.selector";
import { MenuService } from "../show-products/menu/menu.service";



@Injectable()
export class CompositionService {

  public originalArray: ProductInterface[] = [];
  public copyArray: ProductInterface[] = [];
  public compositions$: Observable<ProductInterface[]> = this.store.select(compositionsArraySelector);


  constructor(public store: Store,  public menuService: MenuService) {
    this.compositions$.subscribe( array => {
      this.originalArray = array;
      this.copyArray = this.originalArray.map((element: ProductInterface) => element);
    });

    menuService.subject$.subscribe( () => {
      this.copyArray = this.originalArray;
      this.copyArray = this.menuService.mainFilter(this.copyArray);
    });

  }

}
