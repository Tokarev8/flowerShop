


import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";
import { MainService } from "../../service/main.service";
import { BasketService } from "../basket/basket.service";
import { FavoritesService } from "../favorites/favorites.service";
import { ProductService } from "../product/product.service";






@Component({
  selector: "show-products",
  templateUrl: "./show-products.component.html",
  styleUrls: ["./show-products.component.scss", ]
})
export class ShowProductsComponent implements OnInit {

  @Input() array: ProductInterface[] = [];


  constructor(private store: Store,
              public mainService: MainService,
              private ref: ChangeDetectorRef,
              private basketService: BasketService,
              private productService: ProductService,
              public favoritesService: FavoritesService,
  ) {

    setInterval(() => {
      this.ref.markForCheck();
    }, 10);
  }

  ngOnInit(): void {


  }

  public show(): void {

  }

  addElementBasket(element: ProductInterface): void {
   this.basketService.addElement(element);
  }

  setProduct(element: ProductInterface): void {
      this.productService.product = element;
      this.productService.mainImage = element.image[0];
  }
}
