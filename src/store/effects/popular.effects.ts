

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

import { LoadBackService } from "../../service/loadback.service";
import { popularActionsType, successfulLoadingPopular } from "../actions/popular.actions";




@Injectable()
export class PopularEffects {
  constructor(
    private actions$: Actions,
    private popularService: LoadBackService,
  ) {}



  loadPopular$ = createEffect(() => this.actions$.pipe(
    ofType(popularActionsType.LoadingPopular),
    mergeMap( () => this.popularService.getArray("http://localhost:3000/popular")
      .pipe(
        map( popular => successfulLoadingPopular({array: popular})),
      ),


    )));


}
