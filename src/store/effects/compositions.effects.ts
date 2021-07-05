

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";




import { LoadBackService } from "../../service/loadback.service";


import { compositionsActionsType, successfulLoadingComposistions } from "../actions/compositions.actions";


@Injectable()
export class CompositionsEffects {
  constructor(
    private actions$: Actions,
    private compositionsService: LoadBackService,
  ) {}



  loadCompositions$ = createEffect(() => this.actions$.pipe(
    ofType(compositionsActionsType.LoadingCompositions),
    mergeMap( () => this.compositionsService.getArray("http://localhost:3000/compositions")
      .pipe(
        map( flowers => successfulLoadingComposistions({array: flowers})),
      ),


    )));


}
