import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductInterface } from "../../interfaces/product-state";

import { Store } from "@ngrx/store";

import { Categories } from "../../interfaces/categories";
import { LoadBackService } from "../../service/loadback.service";
import { addOrder, loadingOrders } from "../../store/actions/orders.action";
import { ClearBasketArray, deleteBasketElement, setUser } from "../../store/actions/user.actions";
import { bouquetsArraySelector } from "../../store/selectors/bouquet.selector";
import { compositionsArraySelector } from "../../store/selectors/compositions.selector";
import { flowersArraySelector } from "../../store/selectors/flowers.selector";
import { giftsArraySelector } from "../../store/selectors/gifts.selector";
import { ordersArraySelector } from "../../store/selectors/orders.selector";
import { userSelector } from "../../store/selectors/user.selector";
import { BasketInterface } from "../../store/states/state-categories/basket-state";
import { OrderInterface, ProductBasket } from "../../store/states/state-categories/orders-state";
import { Basket, initializtionUser, UsersInterface } from "../../store/states/state-categories/user-state";



@Injectable()
export class BasketService {

  public copyArray: BasketInterface[] = [];
  public sumPrice: number = 0;
  private arrayFromOrder: ProductBasket[] = [];

  private orders$: Observable<OrderInterface[]> = this.store.select(ordersArraySelector);
  private orderLength: number = 0 ;

  private user$: Observable<UsersInterface> = this.store.select(userSelector);
  private user: UsersInterface = initializtionUser;




  constructor(public store: Store, public loadBackService: LoadBackService) {


    this.orders$.subscribe( array => this.orderLength = array.length);

    this.user$.subscribe(
      user => {this.user =  user;
        this.setBasketArray(); });
  }


 public addElement(element: ProductInterface): void {

    let pass: boolean = true;
    this.copyArray.forEach(el => {
      if (el._id === element._id) { pass = false; }
    });
    if (pass) {
      const basketElement: Basket = {
        basketId: element._id,
        quantity: 1,
        basketCategories: element.categories,
      };

      const newBasketArray: Basket[] = [];
      this.user.basked.forEach( el => newBasketArray.push(el));
      newBasketArray.push(basketElement);

      const newUser: UsersInterface = Object.assign({}, this.user);

      newUser.basked = newBasketArray;

      this.store.dispatch(setUser({user: newUser}));

      if ( this.user.email !== "") {
        this.loadBackService.putElement(`http://localhost:3000/user/${newUser._id}`, newUser);
      }

    }
 }

 public orderAdd(): void {
   this.copyArray.forEach(element => {
     const x: ProductBasket = {
       category: element.categories,
       idProduct: element._id,
       quantity: element.quantity,
     };
     this.arrayFromOrder.push(x);
   });

   // tslint:disable-next-line:no-any
   const order: any = {
     number: this.orderLength + 1,
     arrayProduct: this.arrayFromOrder,
     time: Date.now(),
     total: this.sumPrice,
     buyerId: this.user._id,
     status: 0,
   };

   this.arrayFromOrder = [];

   this.loadBackService.postElement("http://localhost:3000/orders", order);
   this.store.dispatch(addOrder({newElement: order}));

   this.store.dispatch(ClearBasketArray());
   const newUser: UsersInterface = Object.assign({}, this.user);
   newUser.basked = [];
   if (this.user.email !== "") {
     this.loadBackService.putElement(`http://localhost:3000/user/${this.user._id}`, newUser);
   }


 }


  setBasketArray (): void {

    this.copyArray = [];


    let basketProduct: BasketInterface | undefined;

    if (this.user.basked !== undefined) {

      for (const element of  this.user.basked) {
        basketProduct = undefined;

        switch (element.basketCategories) {
          case Categories.bouquets: {
            const product$: Observable<ProductInterface[]> = this.store.select(bouquetsArraySelector);
            product$.subscribe( array => {
              basketProduct =  Object.assign(
                {  quantity: element.quantity},
                array.find(el => el._id === element.basketId) ); }) ;
            break; }

          case Categories.flowers: {
            const product$: Observable<ProductInterface[]> = this.store.select(flowersArraySelector);
            product$.subscribe( array => {
              basketProduct =  Object.assign(
                {  quantity: element.quantity},
                array.find(el => el._id === element.basketId) ); }) ;
            break; }

          case Categories.compositions: {
            const product$: Observable<ProductInterface[]> = this.store.select(compositionsArraySelector);
            product$.subscribe( array => {
              basketProduct =  Object.assign(
                {  quantity: element.quantity},
                array.find(el => el._id === element.basketId) ); }) ;
            break; }

          case Categories.gifts: {
            const product$: Observable<ProductInterface[]> = this.store.select(giftsArraySelector);
            product$.subscribe( array => {
              basketProduct =  Object.assign(
                {  quantity: element.quantity},
                array.find(el => el._id === element.basketId) ); }) ;
            break; }

          default: break;
        }
        if (basketProduct !== undefined ) {
          this.copyArray.push(basketProduct);
         // this.quantity.push(element.quantity);
        }
      }
    }
    this.sumPrice = 0;
    this.copyArray.forEach( el => this.sumPrice += el.price * el.quantity);

  }




  public changeQuantity( element: BasketInterface, operation: string ): void {

    if (operation === "+") {
      element.quantity++;
    } else {   element.quantity--; }

    const newBasketArray: Basket[] = [];

    this.user.basked.forEach( el => {
      if (el.basketId === element._id) {
        const changeElement: Basket = {
          basketId: el.basketId,
          quantity:  element.quantity,
          basketCategories: el.basketCategories, };
        newBasketArray.push(changeElement);
      } else { newBasketArray.push(el); }
    });

    const newUser: UsersInterface = Object.assign( {}, this.user);
    newUser.basked = newBasketArray;

    if (this.user.email !== "") {
      this.loadBackService.putElement(`http://localhost:3000/user/${newUser._id}`, newUser);
    }



    this.store.dispatch(setUser({user: newUser}));
  }



  public deleteElement(id: string): void {

    const newBasketArray: Basket[] = [];

    this.user.basked.forEach( el => {
      if (el.basketId !== id) {
        newBasketArray.push(el); }});

    const newUser: UsersInterface = Object.assign({}, this.user);
    newUser.basked = newBasketArray;

    this.store.dispatch(deleteBasketElement({user: newUser}));

    if (this.user.email !== "") {
      this.loadBackService.putElement(`http://localhost:3000/user/${newUser._id}`, newUser);
    }

  }
}
