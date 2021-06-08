import { categories, flowers, reason } from "../../interfaces/tags/tags-interface";

/*
export interface TagArray {
  categories?: categories;
  flowers?: flowers[];
  reason?: reason[];
}

export const initialStateTagArray: TagArray = {
};
*/

export interface ProductInterface {
  name: string;
  image: string[];
  price: number;
  structure: string;
  description: string;
  id: string;
  categories: string;
  flowers: string[];
  reason: string[];  // теги для поиска
  popularity: number; // рейтинг популярности
  favorite: boolean; // индикатор понравившегося товара
}

export const initialStateProduct: ProductInterface = {
  name: "",
  image: [],
  price: 0,
  structure: "",
  description: "",
  id: "",
  categories: "",
  flowers: [],
  reason: [],
  popularity: 0,
  favorite: false,
};


/*
Сделал продукт, на сонове которого будут строиться остальные эелементы
 */
