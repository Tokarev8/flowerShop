

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";


import { initialBouquets, stateActionsType } from "../actions/bouquets.actions";

import { LoadBackService } from "../../service/loadback.service";

@Injectable()
export class BouquetsEffects {
  constructor(
    private actions$: Actions,
    private bouquetsService: LoadBackService,
  ) {}




  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(stateActionsType.initialBouquets),
    mergeMap( () => this.bouquetsService.getArray()
      .pipe(
        map( bouquets => ({ type: stateActionsType.initialSuccessBouquets, payload: bouquets}) ),
         catchError(() => EMPTY),
      ),
    ),
    ),


  );

}
