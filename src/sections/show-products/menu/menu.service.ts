import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ProductInterface } from "../../../interfaces/product-state";
import { flowers, reason } from "../../../interfaces/tags/tags-interface";
import {
  filterFlowersTag,
  filterReasonsTag, popularSort,
  priceFrom, priceSort,
  priceTo, serach,

} from "../../../service/function-sorting";

@Injectable()
export class MenuService {


   public subject$: Subject<void> = new Subject<void>();
  public minPrice: number = 0;
  public maxPrice: number = 0;

  public tagFlower: flowers[] = [];
  public tagReason: reason[] = [];

  public sortPopular: string = "";
  public sortPrice: string = "";
  public searchText: string = "";
  public popular: boolean = false;
  public price: boolean = false;


  // tslint:disable-next-line:no-any
  setSearchText(event: any): void {
    this.searchText = event.target.value;
    this.subject$.next();
  }


  SetMinPrice(minPrice: number): void {
    this.minPrice = minPrice;
    this.subject$.next();
  }

  SetMaxPrice(maxPrice: number): void {
    this.maxPrice = maxPrice;
    this.subject$.next();
  }




   mainFilter( copyArray: ProductInterface[] ): ProductInterface[] {

     if (this.minPrice > 0) {
       copyArray = priceFrom(copyArray, this.minPrice);
     }
    if (this.maxPrice > 0) {
      copyArray = priceTo(copyArray, this.maxPrice);
    }
    //  теги
    if ( this.tagFlower.length !== 0) {
      copyArray = filterFlowersTag(copyArray, this.tagFlower);
    }
     if ( this.tagReason.length !== 0) {
       copyArray = filterReasonsTag(copyArray, this.tagReason);
     }

    // сортировка
     if (this.popular) {
       copyArray = popularSort(copyArray, this.sortPopular);
     }

     if (this.price) {
       copyArray = priceSort(copyArray, this.sortPrice);
     }


    // поиск

     if (this.searchText.length > 0) {
       copyArray = serach(copyArray, this.searchText);
     }


    return copyArray;
  }



}
