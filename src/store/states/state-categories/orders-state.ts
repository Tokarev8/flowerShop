


export interface ProductBasket {
  category: string;
  idProduct: string;
  quantity: number;
}

export interface OrderInterface {
  number: number;
  arrayProduct: ProductBasket[];
  time: number;
  total: number;
  buyerId: string;
  status: number;
  _id: string;
}

export interface OrdersState {
  orders: OrderInterface[];
}

export const initializeOrderState: OrdersState =  {
  orders : [],
};


export const initOrderInterface = {
  number: 0,
  arrayProduct: [],
  time: 0,
  total: 0,
  buyerId: "",
  status: 0,
  _id: ""
};
