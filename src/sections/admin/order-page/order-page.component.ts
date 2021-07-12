

import { ChangeDetectorRef, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadingOrders } from "../../../store/actions/orders.action";
import { OrderService } from "./order-page.service";



@Component({
  selector: "order-page-component",
  templateUrl: "./order-page.component.html",
  styleUrls: ["./order-page.component.scss", "./order-page-style.component.scss"]
})
export class OrderPageComponent  {

  constructor( public orderService: OrderService, private store: Store, private ref: ChangeDetectorRef) {
    store.dispatch(loadingOrders());

    setInterval(() => {
      this.ref.markForCheck();
    }, 10);

  }

}
