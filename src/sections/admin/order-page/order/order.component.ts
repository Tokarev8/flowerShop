




import { ChangeDetectorRef, Component, OnInit } from "@angular/core";

import { ActivatedRoute, Params } from "@angular/router";
import { initOrderInterface, OrderInterface } from "../../../../store/states/state-categories/orders-state";
import { OrderService } from "../order-page.service";
import {Categories} from "../../../../interfaces/categories";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ordersArraySelector} from "../../../../store/selectors/orders.selector";
import {initialStateProduct, ProductInterface} from "../../../../interfaces/product-state";
import {bouquetsArraySelector} from "../../../../store/selectors/bouquet.selector";
import {flowersArraySelector} from "../../../../store/selectors/flowers.selector";
import {compositionsArraySelector} from "../../../../store/selectors/compositions.selector";
import {giftsArraySelector} from "../../../../store/selectors/gifts.selector";


@Component({
  selector: "order-component",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {

   public order: OrderInterface| undefined = initOrderInterface;
   public productArray: ProductInterface[] = [];
   public quantity: number[] = [];


  constructor( public orderService: OrderService, private router: ActivatedRoute, private store: Store) {
  }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {

    this.order = this.orderService.copyOrdersArray.find( item => item.number === +params.number);


    });

    this.setProductArray();

  }



  op(): void {
    console.log( this.quantity);
  }





  setProductArray (): void {

    let product: ProductInterface | undefined;

    if (this.order?.arrayProduct !== undefined) {

      for (const element of  this.order?.arrayProduct) {
        product = undefined;

        // console.log("OPA", element);

        switch (element.category) {
          case Categories.bouquets: {
            console.log("попали в букеты");
           const product$: Observable<ProductInterface[]> = this.store.select(bouquetsArraySelector);
            product$.subscribe( array => {
                product = array.find(el => el._id === element.idProduct); });
            break; }

          case Categories.flowers: {
            const product$: Observable<ProductInterface[]> = this.store.select(flowersArraySelector);
            product$.subscribe( array => {
              product = array.find(el => el._id === element.idProduct); });
            break; }

          case Categories.compositions: {
            const product$: Observable<ProductInterface[]> = this.store.select(compositionsArraySelector);
            product$.subscribe( array => {
              product = array.find(el => el._id === element.idProduct); });
            break; }

          case Categories.gifts: {
            const product$: Observable<ProductInterface[]> = this.store.select(giftsArraySelector);
            product$.subscribe( array => {
              product = array.find(el => el._id === element.idProduct); });
            break; }

          default: break;
        }
        if (product !== undefined ) {
          this.productArray.push(product);
          console.log("qainity", element.quantity);
          this.quantity.push(element.quantity);
        }
      }
    }
  }
















}
