

import { createAction, props } from "@ngrx/store";
import { UsersInterface } from "../states/state-categories/user-state";



export enum userActionsType {
  SetUser = "[USER] Set user",
}



export const setUser = createAction(`${userActionsType.SetUser}`, props<{user: UsersInterface }>() );


