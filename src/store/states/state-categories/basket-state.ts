import { initialStateProduct, ProductInterface } from "./product-state";


export interface ProductBasketInterface {
  product: ProductInterface;
  quantity: number;
  sumPrice: number;
}

export const initialProductBasket: ProductBasketInterface = {
  product : initialStateProduct,
  quantity: 0,
  sumPrice: 0,
};

// Можно удалить
export interface BasketInterface {
  productArray: ProductBasketInterface[];
  sumPriceArray: number;
}

export const initialBasketState: BasketInterface = {
  productArray: [],
  sumPriceArray: 0
};

// Массив элементов корзины
