import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductInterface } from "../../interfaces/product-state";

import { Store } from "@ngrx/store";

import { LoadBackService } from "../../service/loadback.service";
import {
  addElementBasket,
  changeQuantityBasketArray, clearBasket,
  countingSumPrice, deleteElementBasket,
} from "../../store/actions/basket.actions";
import { addOrder } from "../../store/actions/orders.action";
import { basketArraySelector, basketSumPriceSelector } from "../../store/selectors/basket.selector";
import { ordersArraySelector } from "../../store/selectors/orders.selector";
import { userSelector } from "../../store/selectors/user.selector";
import { BasketInterface, InitBasketInterface } from "../../store/states/state-categories/basket-state";
import { OrderInterface, ProductBasket } from "../../store/states/state-categories/orders-state";
import { initializtionUser, UsersInterface } from "../../store/states/state-categories/user-state";



@Injectable()
export class BasketService {


  public originalArray: BasketInterface[] = [];
  public copyArray: BasketInterface[] = [];
  public sumPrice: number = 0;
  private arrayFromOrder: ProductBasket[] = [];



  public basket$: Observable<BasketInterface[]> = this.store.select(basketArraySelector);
  public sumPrice$: Observable<number> = this.store.select(basketSumPriceSelector);

  private orders$: Observable<OrderInterface[]> = this.store.select(ordersArraySelector);
  private orderLengths: number = 0 ;

  private user$: Observable<UsersInterface> = this.store.select(userSelector);
  private user: UsersInterface = initializtionUser;



  constructor(public store: Store, public loadBackService: LoadBackService) {

    this.basket$.subscribe( array => {
      this.originalArray = array;
      this.store.dispatch(countingSumPrice({array:  this.originalArray }));
      this.copyArray = this.originalArray.map((element: BasketInterface) => element);


    });

    this.sumPrice$.subscribe( price => this.sumPrice = price);

    this.orders$.subscribe( array => this.orderLengths = array.length);

    this.user$.subscribe( user => this.user =  user);
  }


 public changeQuantity (element: BasketInterface): void {
    // Изменяем количество елемента в массиве баскет
  this.store.dispatch(changeQuantityBasketArray({element: element}));
 }


 public addElement(element: ProductInterface): void {
    let pass: boolean = true;
    this.copyArray.forEach(el => {
      if (el._id === element._id) { pass = false; }
    });
    if (pass) {
      const elementBasket: BasketInterface = Object.assign({quantity: 1}, element);
      elementBasket.quantity = 1;
      this.store.dispatch(addElementBasket({element: elementBasket}));
       this.loadBackService.postElement("http://localhost:3000/basket", elementBasket);
    }
 }

 public deleteElement(id: string): void {
  this.store.dispatch(deleteElementBasket({id: id}));
   this.loadBackService.deleteElement(`http://localhost:3000/basket/${id}`);
 }



 public orderAdd(): void {

    this.copyArray.forEach( element => {
      const x: ProductBasket = {
        category: element.categories,
        idProduct: element._id,
        quantity: element.quantity,
      };
      this.arrayFromOrder.push(x);
    });


   const order: OrderInterface = {
     number: this.orderLengths + 1,
     arrayProduct: this.arrayFromOrder,
     time: Date.now(),
     total: this.sumPrice,
     buyerId: this.user._id,
     status: 0,
   };

   this.arrayFromOrder = [];

    console.log("колво ", order.arrayProduct[0].quantity);
   this.loadBackService.postElement("http://localhost:3000/orders", order );

   this.store.dispatch( addOrder({newElement: order}));
   this.store.dispatch(clearBasket());


 }

}
