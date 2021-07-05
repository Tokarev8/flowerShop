

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";




import { LoadBackService } from "../../service/loadback.service";
import { MainService } from "../../service/main.service";
import {
  favoritesActionsType, favoritesAddElement,
  favoritesInitializationSuccess,
} from "../actions/favorites.actions";


@Injectable()
export class FavoritesEffects {
  constructor(
    private actions$: Actions,
    private favoritesService: LoadBackService,
    private mainService: MainService,

  ) {}



  loadFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(favoritesActionsType.loadingFavorites),
    mergeMap( () => this.favoritesService.getArray("http://localhost:3000/favorites")
      .pipe(
        map( favorites => favoritesInitializationSuccess({array: favorites})),
      ),


    )));


}
