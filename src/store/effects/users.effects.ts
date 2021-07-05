import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoadBackService } from "../../service/loadback.service";

import { map, mergeMap } from "rxjs/operators";
import { successfulLoadingUsers, usersActionsType } from "../actions/users.actions";


@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private userService: LoadBackService,
  ) {}



  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(usersActionsType.LoadingUsers),
    mergeMap( () => this.userService.getArrayUsers("http://localhost:3000/user")
      .pipe(
        map( users => successfulLoadingUsers({array: users})),
      ),


    )));


}
