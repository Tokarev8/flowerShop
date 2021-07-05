

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

import { LoadBackService } from "../../service/loadback.service";


import { BasketService } from "../../sections/basket/basket.service";
import {
  basketActionsType,
  decreaseSumPrice,
  increaseSumPrice,
  successfulLoadingBasket,
} from "../actions/basket.actions";




@Injectable()
export class BasketEffects {
  constructor(
    private actions$: Actions,
    private loadBackService: LoadBackService,
    private basketService: BasketService,

  ) {}



  loadBasket$ = createEffect(() => this.actions$.pipe(
    ofType(basketActionsType.LoadingBasket),
    mergeMap( () => this.loadBackService.getArrayBasket("http://localhost:3000/basket")
      .pipe(
        map( basket => successfulLoadingBasket({array: basket})),
      ),
    )));




  // increaseSPrice = createEffect( () => this.actions$.pipe(
  //   ofType(basketActionsType.AddElementArray),
  //   map(() => increaseSumPrice({price: this.basketService.addElement.price}),
  //     this.loadBackService.getArray(""), // заменить на добавить в бек
  //   ),
  //   ),
  // );

  //
  // decreaseSPrice = createEffect( () => this.actions$.pipe(
  //   ofType(basketActionsType.DeleteElementArray),
  //   map(() => decreaseSumPrice({price: this.basketService.deleteElement.price}) ),
  //   ),
  // );


}
