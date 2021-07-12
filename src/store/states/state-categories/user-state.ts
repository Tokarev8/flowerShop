
export interface Basket {
  basketId: string;
  quantity: number;
  basketCategories: string;
}
export interface Favorite {
  favoriteId: string;
  favoriteCategories: string;
}


export interface UsersInterface {
  login: string;
  email: string;
  password: string;
  _id: string;
  status: boolean;
  basked: Basket[];
  favorite: Favorite[];
}
export const initializtionUser: UsersInterface = {
  login: "",
  email: "",
  password: "",
  _id: "",
  status: false,
  basked: [],
  favorite: [] ,
};




export interface UsersState {
  array: UsersInterface[];
}
export const initializtionUsersState: UsersState = {
  array: []
};





export interface UserState {
  user: UsersInterface;
}
export const initializtionUserState: UserState = {
  user: initializtionUser
};



export interface PostUser {
  login: string;
  email: string;
  password: string;
  status: boolean;
  basked: Basket[];
  favorite: Favorite[];
}


