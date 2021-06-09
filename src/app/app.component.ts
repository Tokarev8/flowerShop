import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { addElement, deleteElement, deleteElements, showElements } from "../store/actions/bouquets.actions";
import { bouquetsArraySelector } from "../store/selectors/bouquet.selector";
import { ProductInterface } from "../interfaces/product-state";
import { originalArrayBouquets } from "../test/array-product/bouquets";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {

 public product: ProductInterface = originalArrayBouquets[0];

 public originalArray: ProductInterface[] = [];
 public copyOfArray: ProductInterface[] = [];

 // создаем подпищикша на состояния хранилища типа обсерабл  bouquetsArray$
 bouquetsArray$ = this.store.select(bouquetsArraySelector);


  constructor(private store: Store) {



}


  public add(): void {
    this.store.dispatch(addElement());
  }
  public delete(): void {
    this.store.dispatch(deleteElement());
  }
  public deleteAll(): void {
    this.store.dispatch(deleteElements());
  }
  public show(): void {
    this.store.dispatch(showElements());
  }


}
