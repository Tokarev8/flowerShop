import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { initialStateProduct, ProductInterface } from "../../interfaces/product-state";
import { LoadBackService } from "../../service/loadback.service";
import { userSelector } from "../../store/selectors/user.selector";
import { initializtionUser, UsersInterface } from "../../store/states/state-categories/user-state";


@Injectable()
export class ProductService {

  public product: ProductInterface = initialStateProduct;
  public mainImage: string = "";

  private user$: Observable<UsersInterface> = this.store.select(userSelector);
  public user: UsersInterface = initializtionUser;

  constructor( private loadBackService: LoadBackService, public store: Store) {
    this.user$.subscribe( user => {
      this.user = user;
    });
  }
}
