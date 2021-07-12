

export interface ProductInterface {
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
}

export const initialStateProduct: ProductInterface = {
  name: "",
  image: [],
  price: 0,
  structure: "",
  description: "",
  _id: "",
  categories: "",
  flowers: [],
  reason: [],
  popularity: 0,
  favorite: false,
  discount: 0,
};

export interface PostProductInterface {
  name: string;
  image: string[];
  price: number;
  structure: string;
  description: string;
  categories: string;
  flowers: string[];
  reason: string[];  // теги для поиска
  popularity: number; // рейтинг популярности
  favorite: boolean; // индикатор понравившегося товара
  discount: number;  // скидка на товар в %
}
