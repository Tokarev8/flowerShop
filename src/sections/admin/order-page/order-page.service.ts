import { ChangeDetectorRef, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { ordersArraySelector } from "../../../store/selectors/orders.selector";
import {initOrderInterface, OrderInterface} from "../../../store/states/state-categories/orders-state";
import { arraySort } from "./order-sort";
import {changeOrder} from "../../../store/actions/orders.action";


@Injectable()
export class OrderService {
  public maxLengthInput: number = 3;
  public originalOrdersArray: OrderInterface[] = [];
  public copyOrdersArray: OrderInterface[] = [];
  public numberOfPages: number = 1;
  public maxLengthOrdersArray: number = 1;
  public partArrayOrders: OrderInterface[] = [];
  private orders$: Observable<OrderInterface[]> = this.store.select(ordersArraySelector);
  // private subject$: Subject<number> = new Subject<number>();


  // sort
  public arraySort: string[] = arraySort;
  public choiceSort: string = "";

  // for order
  public order: OrderInterface = initOrderInterface;


  constructor(private store: Store, private router: Router) {

    this.orders$.subscribe( array => {
      this.originalOrdersArray = array.map( elem => elem);
      this.copyOrdersArray = this.originalOrdersArray;

      this.originalOrdersArray.length < 10
        ? this.maxLengthOrdersArray = 1
        : this.maxLengthOrdersArray = Math.ceil(this.originalOrdersArray.length / 10);

      this.setPartArray(1);
    });
  }



  private setPartArray(number: number): void {
    this.partArrayOrders = [];
    for (let i: number = 0; i < this.originalOrdersArray.length; i++ ) {
      if ( i > number * 10) {break; }

      if ( i < number * 10 && i >= (number - 1) * 10 ) {
        this.partArrayOrders.push(this.originalOrdersArray[i]);
      }
    }
    // this.partArrayOrders.sort( (a, b) => b.number - a.number);

  }


  // tslint:disable-next-line:no-any
  changeNumber(event: any): void {

    if ( event.target.value === 0 || event.target.value === "0" || event.target.value === "" ) {
      event.target.value = 1 ;
    }

    if ( event.target.value.length > this.maxLengthInput) {
      event.target.value =  event.target.value.slice(0, this.maxLengthInput);
    }

    this.numberOfPages = event.target.value;

    this.setPartArray(this.numberOfPages);
  }

  decrease(): void {
    if (this.numberOfPages > 1) {
      this.numberOfPages--;
      this.setPartArray(this.numberOfPages);
    }

  }

  increase(): void {
    if (this.numberOfPages < this.maxLengthOrdersArray) {
      this.numberOfPages++;
      this.setPartArray(this.numberOfPages);
    }

  }


  start(): void {
    this.numberOfPages = 1;
    this.setPartArray(1);
  }


  end(): void {
    this.numberOfPages = this.maxLengthOrdersArray;
    this.setPartArray(this.maxLengthOrdersArray);

  }


  // tslint:disable-next-line:no-any
  setSort($event: any): void {
    this.choiceSort = $event.target.value;
  }


  goToOrder(element: OrderInterface): void {
    this.router.navigate(["/admin/orders", element.number] );
    this.order = element;
  }

  setStatusOrder(number: number): void {

    // задиспатчим изменения
    this.store.dispatch(changeOrder({element: this.order, statusNumber: number}));

      const x = Object.assign({},  this.order);
      x.status = number;
      this.order = Object.assign({},  x);
      console.log(x.status );


  }


}






