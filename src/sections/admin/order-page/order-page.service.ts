import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { LoadBackService } from "../../../service/loadback.service";
import { changeOrder } from "../../../store/actions/orders.action";
import { ordersArraySelector } from "../../../store/selectors/orders.selector";
import { initOrderInterface, OrderInterface } from "../../../store/states/state-categories/orders-state";
import { arraySort } from "./order-sort";


@Injectable()
export class OrderService {
  public maxLengthInput: number = 3;
  public originalOrdersArray: OrderInterface[] = [];
  public copyOrdersArray: OrderInterface[] = [];
  public numberOfPages: number = 1;
  public maxLengthOrdersArray: number = 1;
  public partArrayOrders: OrderInterface[] = [];
  private orders$: Observable<OrderInterface[]> = this.store.select(ordersArraySelector);


  // sort
  public arraySort: string[] = arraySort;
  public choiceSort: string = arraySort[0];
  public searchNumber: string =  "";
  public streamSort$: Subject<void> = new Subject<void>();
  public dateFrom: number =  0;
  public dateBefore: number =  0;
  public statusOrder: boolean[] = [true, true, true];

  // for order
  public order: OrderInterface = initOrderInterface;


  constructor(private store: Store,
              private router: Router,
              private loadBackService: LoadBackService) {

    this.orders$.subscribe( array => {
      this.originalOrdersArray = array.map( elem => elem);
      this.copyOrdersArray = this.originalOrdersArray;

      this.originalOrdersArray.length < 10
        ? this.maxLengthOrdersArray = 1
        : this.maxLengthOrdersArray = Math.ceil(this.originalOrdersArray.length / 10);

      this.setPartArray(1);
    });

    this.streamSort$.subscribe(() => {
      this.sortArray();
      this.setPartArray(1);
    });
  }



  private setPartArray(number: number): void {
    this.partArrayOrders = [];
    for (let i: number = 0; i < this.copyOrdersArray.length; i++ ) {
      if ( i > number * 10) {break; }
      if ( i < number * 10 && i >= (number - 1) * 10 ) {
        this.partArrayOrders.push(this.copyOrdersArray[i]);
      }
    }
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
    this.store.dispatch(changeOrder({element: this.order, statusNumber: number}));
      const x = Object.assign({},  this.order);
      x.status = number;
      this.order = Object.assign({},  x);
      this.loadBackService.putElement(`http://localhost:3000/orders/${this.order._id}`, {status: number});
  }


  // tslint:disable-next-line:no-any
  setSearchNumber (event: any): void {
    this.searchNumber = event.target.value;
    this.streamSort$.next();
  }

  // tslint:disable-next-line:no-any
  setDateFrom (event: any): void {
    this.dateFrom = new Date(event.target.value).getTime();
    this.streamSort$.next();
  }

  // tslint:disable-next-line:no-any
  setDateBefore (event: any): void {
    this.dateBefore = new Date(event.target.value).getTime();
    this.streamSort$.next();
  }

  setSortStatus (number: number): void {
    this.statusOrder[number] = !this.statusOrder[number];
    this.streamSort$.next();
  }




  sortArray(): void {
    this.copyOrdersArray = this.originalOrdersArray;

    // сортируем по номеру
    if (this.searchNumber !== "" && this.searchNumber !== "0" ) {
      this.copyOrdersArray = this.copyOrdersArray.filter(
        (elem) => elem.number === +this.searchNumber);
    }
    // по дате

    // от
      if ( this.dateFrom !== 0) {
        this.copyOrdersArray = this.copyOrdersArray.filter(
          (elem) => elem.time >= this.dateFrom);
      }
    // до

    if ( this.dateBefore !== 0) {
      this.copyOrdersArray = this.copyOrdersArray.filter(
        (elem) => elem.time <= this.dateBefore);
    }

    // по состоянию
    // active
    if (!this.statusOrder[0] ) {
      this.copyOrdersArray = this.copyOrdersArray.filter(
        (elem) => elem.status !== 0);
    }
    // completed
    if (!this.statusOrder[1] ) {
      this.copyOrdersArray = this.copyOrdersArray.filter(
        (elem) => elem.status !== 1);
    }
    // canceled
    if (!this.statusOrder[2] ) {
      this.copyOrdersArray = this.copyOrdersArray.filter(
        (elem) => elem.status !== 2);
    }
  }



}






