
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Categories } from "../interfaces/categories";
import { ProductInterface } from "../interfaces/product-state";
import { flowers, reason } from "../interfaces/tags/tags-interface";
import { Url } from "../interfaces/url";
import { BouquetsService } from "../sections/bouquets/bouquets.service";
import { CompositionService } from "../sections/compositions/compositions.service";
import { FlowersService } from "../sections/flowers/flowers.service";
import { GiftsService } from "../sections/gifts/gifts.service";
import { priceFrom, priceTo } from "../service/function-sorting";
import {  loadingBouquets } from "../store/actions/bouquets.actions";
import {
  initializationFavoritesArray,
} from "../store/actions/favorites.actions";
import { loadingFlowers } from "../store/actions/flowers.actions";

import { bouquetsArraySelector } from "../store/selectors/bouquet.selector";
import { favoritesArraySelector } from "../store/selectors/favorites.selector";
import { flowersArraySelector } from "../store/selectors/flowers.selector";
import { userSelector } from "../store/selectors/user.selector";
import { initializtionUser, UsersInterface } from "../store/states/state-categories/user-state";
import { LoadBackService } from "./loadback.service";



@Injectable()
export class MainService {
  private url: string = "";
  public products$: Observable<ProductInterface[]> = this.store.select(bouquetsArraySelector);




  public addElement: ProductInterface | undefined;
  public copyArray: ProductInterface[] = [];


  // для сорта
  public originalArray: ProductInterface[] = [];
  public arrayShowProduct: ProductInterface[] = [];
  private categories: string = "";
  public priceMin: number = 0;
  public priceMax: number = 0;
  public flowersTag: flowers[] = [];
  public reasonTag: reason[] = [];


  // новая колекция
  public user$: Observable<UsersInterface> = this.store.select(userSelector);
  public user: UsersInterface = initializtionUser;
  public favorites$: Observable<ProductInterface[]> = this.store.select(favoritesArraySelector);
  public favoriteArray: ProductInterface[] = [];


  constructor(private loadBackService: LoadBackService,
              private store: Store,
              private bouquetService: BouquetsService,
              private flowersService: FlowersService,
              private compositionService: CompositionService,
              private giftsService: GiftsService,
  ) {}


  public setUrl(url: Url): void {
    this.url = url;
    switch (this.url) {
      case Url.bouquets :
        this.store.dispatch(loadingBouquets());
        this.products$ = this.store.select(bouquetsArraySelector);
        break;
      case Url.flowers :
        this.store.dispatch(loadingFlowers());
        this.products$ = this.store.select(flowersArraySelector);
        break;
      case Url.favorites :
        this.store.dispatch(initializationFavoritesArray());
        this.products$ = this.store.select(favoritesArraySelector);
        break;
      default:
    }


    this.products$?.subscribe(array => {
      this.originalArray = array;
      this.copyArray = [];
      this.originalArray.forEach((value) => {
        this.copyArray.push(value);
      });

    });

  }



  public setPriceFrom(array: ProductInterface[], min: number): void {
    this.priceMin = min;
    this.arrayShowProduct = array;
    this.mainFilter();
  }
  public setPriceTo(array: ProductInterface[], max: number): void {
    this.priceMax = max;
    this.arrayShowProduct = array;
    this.mainFilter();
  }
  public setFlowersTag(flowersTagArray: flowers[], array: ProductInterface[]): void {
    this.arrayShowProduct = array;
    this.flowersTag = flowersTagArray;

    this.mainFilter();
  }



  public mainFilter(): void {

    // проверяем нужно ли  искать оригинал
    if (this.categories !== this.arrayShowProduct[0].categories) {
      this.categories = this.arrayShowProduct[0].categories;
      this.getOriginalArray(); // тут присваиваеться оригинал
    }
    // создаём массив для работы с ним
    let copyArray: ProductInterface[] = this.originalArray.map(value => value);
    // 1 первый эта сортировки цена от и до
    if (this.priceMin !== 0 && copyArray.length > 0) {
      copyArray = priceFrom(copyArray, this.priceMin);
    }
    if (this.priceMax !== 0 && copyArray.length > 0) {
      copyArray = priceTo(copyArray, this.priceMax);
    }
    // 2 этап теги
    if (this.flowersTag.length !== 0 && copyArray.length > 0) {
      copyArray = this.filterFlowersTag(copyArray);
    }

    this.setProductArray(copyArray);
  }


  private getOriginalArray(): void {
    switch (this.categories) {
      case Categories.bouquets:
        this.originalArray = this.bouquetService.originalArray;
        break;
      case Categories.flowers:
        this.originalArray = this.flowersService.originalArray;
        break;
      case Categories.compositions:
        this.originalArray = this.compositionService.originalArray;
        break;
      case Categories.gifts:
        this.originalArray = this.giftsService.originalArray;
        break;
      default:
        break;
    }
  }




  private filterFlowersTag(array: ProductInterface[]): ProductInterface[] {
    return array.filter(element => {
      for (const i of this.flowersTag) {
        for (const j  of element.flowers) {
          if (i === j) {return true; }}}
      return false;
    });

  }




  private setProductArray(array: ProductInterface[]): void {
    switch (this.categories) {
      case Categories.bouquets:
        this.bouquetService.copyArray = array;
        break;
      case Categories.flowers:
        this.flowersService.copyArray = array;
        break;
      case Categories.compositions:
        this.compositionService.copyArray = array;
        break;
      case Categories.gifts:
        this.giftsService.copyArray = array;
        break;
      default: break; }}








}
