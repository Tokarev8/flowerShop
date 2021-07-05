


export interface BasketInterface {
  name: string;
  image: string[];
  price: number;
  structure: string;
  description: string;
  _id: string;
  categories: string;
  flowers: string[];
  reason: string[];  // теги для поиска
  popularity: number; // рейтинг популярности
  favorite: boolean; // индикатор понравившегося товара
  discount: number;  // скидка на товар в %
  quantity: number;
}
export const InitBasketInterface =  {
  name: "string",
  image: [],
  price: 0,
  structure: "string",
  description: "string",
  _id: "string",
  categories: "string",
  flowers: [],
  reason: [],  // теги для поиска
  popularity: 0, // рейтинг популярности
  favorite: false, // индикатор понравившегося товара
  discount: 0,  // скидка на товар в %
  quantity: 0,
};






export interface ArrayBasketInterface {
  array: BasketInterface [];
  sumPrice: number;
}

export const initializationProductBasket: ArrayBasketInterface = {
  array : [],
  sumPrice: 0,
};


