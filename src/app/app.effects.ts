import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoadBackService } from "../service/loadback.service";
import { addElement, addElements } from "../store/actions/bouquets.actions";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, ld: LoadBackService) {



  }





  arrayBouquets$ = createEffect(
    () => this.actions$.pipe(
      ofType(addElements),
      // map(() => addElements())
    ),
    {dispatch: false});
}
