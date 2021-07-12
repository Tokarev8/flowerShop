




import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Categories } from "../../../../interfaces/categories";
import { ProductInterface } from "../../../../interfaces/product-state";
import { bouquetsArraySelector } from "../../../../store/selectors/bouquet.selector";
import { compositionsArraySelector } from "../../../../store/selectors/compositions.selector";
import { flowersArraySelector } from "../../../../store/selectors/flowers.selector";
import { giftsArraySelector } from "../../../../store/selectors/gifts.selector";
import { initOrderInterface, OrderInterface } from "../../../../store/states/state-categories/orders-state";
import { ProductService } from "../../../product/product.service";
import { OrderService } from "../order-page.service";


@Component({
  selector: "order-component",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss", "./order-style-component.scss"]
})
export class OrderComponent implements OnInit {

   public order: OrderInterface| undefined = initOrderInterface;
   public productArray: ProductInterface[] = [];
   public quantity: number[] = [];


  constructor( public orderService: OrderService,
               private route: Router,
               private router: ActivatedRoute,
               private store: Store,
               private productService: ProductService) {
  }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
    this.order = this.orderService.copyOrdersArray.find(
      item => item.number === +params.number); });

    this.setProductArray();
  }

  setProductArray (): void {

    let product: ProductInterface | undefined;

    if (this.order?.arrayProduct !== undefined) {

      for (const element of  this.order?.arrayProduct) {
        product = undefined;

        switch (element.category) {
          case Categories.bouquets: {
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
          this.quantity.push(element.quantity);
        }
      }
    }
  }


  setProduct(element: ProductInterface): void {

    this.route.navigate(["/product", element._id]);
    this.productService.product = element;
    this.productService.mainImage = element.image[0];
  }



}
