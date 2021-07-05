


import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ProductInterface } from "../../interfaces/product-state";
import {
  flowers,
  flowersArray,
  flowersArray2,
  reason,
  reasonsArray,
  reasonsArray2,
} from "../../interfaces/tags/tags-interface";
import { LoadBackService } from "../../service/loadback.service";
import { MainService } from "../../service/main.service";
import { BasketService } from "../basket/basket.service";
import { ProductService } from "../product/product.service";






@Component({
  selector: "show-products",
  templateUrl: "./show-products.component.html",
  styleUrls: ["./show-products.component.scss", ]
})
export class ShowProductsComponent implements OnInit {

  @Input() array: ProductInterface[] = [];

  //  для сервиса, работу
  public arrayFlowers: flowers[] = flowersArray;
  public arrayFlowers2: flowers[] = flowersArray2;
  public activeArrayFlower: flowers[] = [];
  public activeTag: boolean[] = [];


  public arrayReasons: reason[] = reasonsArray;
  public arrayReasons2: reason[] = reasonsArray2;

   public minPrice: number = 0;
  public maxPrice: number = 0;
  // public minPrice: number | undefined;

  constructor(private store: Store,
              private ld: LoadBackService,
              public mainService: MainService,
              private ref: ChangeDetectorRef,
              private basketService: BasketService,
              private productService: ProductService,
  ) {

    setInterval(() => {
      this.ref.markForCheck();
    }, 10);
  }

  ngOnInit(): void {

    // this.store.dispatch(initialBouquets());
   // this.subject$.subscribe( value => {});

  }

  public show(): void {
    console.log(  this.mainService.copyArray);

  }


  favoriteElement(elements: ProductInterface): void {

  }




  addFavorite(element: ProductInterface): void {

    this.mainService.addFavorite(element);

  }

  addElementBasket(element: ProductInterface): void {
  this.basketService.addElement(element);


    // тут будет логика
    // продукт переделать под баскетинтерфейс
    // добавить в массив маскета в сторе
    // добавить на сервер
  }


  setProduct(element: ProductInterface): void {
    this.productService.product = element;
    this.productService.mainImage = element.image[0];
  }
}
