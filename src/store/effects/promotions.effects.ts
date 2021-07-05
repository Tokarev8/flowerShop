

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

import { LoadBackService } from "../../service/loadback.service";

import { promotionsActionsType, successfulLoadingPromotions } from "../actions/promotions.actions";


@Injectable()
export class PromotionsEffects {
  constructor(
    private actions$: Actions,
    private promotionService: LoadBackService,
  ) {}



  loadPromotions$ = createEffect(() => this.actions$.pipe(
    ofType(promotionsActionsType.LoadingPromotions),
    mergeMap( () => this.promotionService.getArray("http://localhost:3000/promotions")
      .pipe(
        map( promotions => successfulLoadingPromotions({array: promotions})),
      ),


    )));


}
