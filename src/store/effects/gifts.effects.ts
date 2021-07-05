

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

import { LoadBackService } from "../../service/loadback.service";

import { giftsActionsType, successfulLoadingGifts } from "../actions/gifts.actions";


@Injectable()
export class GiftsEffects {
  constructor(
    private actions$: Actions,
    private giftsService: LoadBackService,
  ) {}



  loadGifts$ = createEffect(() => this.actions$.pipe(
    ofType(giftsActionsType.LoadingGifts),
    mergeMap( () => this.giftsService.getArray("http://localhost:3000/gifts")
      .pipe(
        map( gifts => successfulLoadingGifts({array: gifts})),
      ),


    )));


}
