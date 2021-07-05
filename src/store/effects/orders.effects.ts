import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

import { LoadBackService } from "../../service/loadback.service";


import { OrdersActionsType, successfulLoadingOrders } from "../actions/orders.action";


@Injectable()
export class OrdersEffects {
  constructor(
    private actions$: Actions,
    private ordersService: LoadBackService,
  ) {}



  loadOrders$ = createEffect(() => this.actions$.pipe(
    ofType(OrdersActionsType.LoadingOrders),
    mergeMap( () => this.ordersService.getArrayOrders("http://localhost:3000/orders")
      .pipe(
        map( orders => successfulLoadingOrders({orders: orders})),
      ),


    )));


}
