

import { createAction, props } from "@ngrx/store";
import { Basket, UsersInterface } from "../states/state-categories/user-state";



export enum userActionsType {
  SetUser = "[USER] Set user",
  DeleteBasketElement = "[USER] delete element from basket array",
  ClearBasketArray = "[USER] clear basket array",
  // ChangeUser = "[USER] Change user ",
}



export const setUser = createAction(`${userActionsType.SetUser}`, props<{user: UsersInterface }>() );

export const deleteBasketElement = createAction(`${userActionsType.DeleteBasketElement}`, props<{user: UsersInterface }>() );

export const ClearBasketArray = createAction(`${userActionsType.ClearBasketArray}`);

// export const changeUser = createAction(`${userActionsType.SetUser}`, props<{newUser: UsersInterface }>() );
