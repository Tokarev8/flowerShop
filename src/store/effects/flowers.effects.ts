

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";




import { LoadBackService } from "../../service/loadback.service";
import { MainService } from "../../service/main.service";
import {
  favoritesActionsType, favoritesAddElement,
  favoritesInitializationSuccess,
} from "../actions/favorites.actions";
import { flowersActionsType, successfulLoadingFlowers } from "../actions/flowers.actions";


@Injectable()
export class FlowersEffects {
  constructor(
    private actions$: Actions,
    private flowersService: LoadBackService,
    private mainService: MainService,

  ) {}



  loadFlowers$ = createEffect(() => this.actions$.pipe(
    ofType(flowersActionsType.LoadingFlowers),
    mergeMap( () => this.flowersService.getArray("http://localhost:3000/flowers")
      .pipe(
        map( flowers => successfulLoadingFlowers({array: flowers})),
      ),


    )));


}
