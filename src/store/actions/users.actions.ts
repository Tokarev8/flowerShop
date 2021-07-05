import { createAction, props } from "@ngrx/store";
import { UsersInterface } from "../states/state-categories/user-state";



export enum usersActionsType {
  LoadingUsers = "[USERS] Loading array user from the server",
  LoadingSuccessUsers = "[USERS] Loading  array user success from the server",
  // initialErrorPromotions = "[USER] initial error for array user",

}


export const loadingUsers = createAction(`${usersActionsType.LoadingUsers}`);

export const successfulLoadingUsers = createAction(`${usersActionsType.LoadingSuccessUsers}`, props<{array: UsersInterface[] }>() );


