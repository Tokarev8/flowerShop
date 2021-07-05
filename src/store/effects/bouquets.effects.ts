

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";


import { bouquetsActionsType, initialSuccess } from "../actions/bouquets.actions";

import { LoadBackService } from "../../service/loadback.service";

@Injectable()
export class BouquetsEffects {
  constructor(
    private actions$: Actions,
    private bouquetsService: LoadBackService,

  ) {}




  loadBouquets$ = createEffect(() => this.actions$.pipe(
    ofType(bouquetsActionsType.LoadingBouquets),
    mergeMap( () => this.bouquetsService.getArray("http://localhost:3000/bouquets")
      .pipe(
        map( bouquets => initialSuccess({array: bouquets})),
      ),


    )));


}
