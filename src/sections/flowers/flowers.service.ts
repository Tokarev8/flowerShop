import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ProductInterface } from "../../interfaces/product-state";
import { flowersArraySelector } from "../../store/selectors/flowers.selector";
import { userSelector } from "../../store/selectors/user.selector";
import { UsersInterface } from "../../store/states/state-categories/user-state";
import { FavoritesService } from "../favorites/favorites.service";




@Injectable()
export class FlowersService {

  public originalArray: ProductInterface[] = [];
  public copyArray: ProductInterface[] = [];

  public flowers$: Observable<ProductInterface[]> = this.store.select(flowersArraySelector);
  public user$: Observable<UsersInterface> = this.store.select(userSelector);

  constructor(private store: Store, private favoritesService: FavoritesService) {

    this.flowers$.subscribe( array => {
      this.originalArray = array;
        this.copyArray =  this.originalArray.map((element: ProductInterface) => element);
      });

}

}
