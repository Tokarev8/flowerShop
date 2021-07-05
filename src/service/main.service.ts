import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Categories } from "../interfaces/categories";
import { ProductInterface } from "../interfaces/product-state";
import { Url } from "../interfaces/url";
import { bouquetsChangeFavorites, loadingBouquets } from "../store/actions/bouquets.actions";
import {
  favoritesAddElement,
  favoritesDeleteElement,
  initializationFavoritesArray,
} from "../store/actions/favorites.actions";
import { changeFavoritesFlowers, loadingFlowers} from "../store/actions/flowers.actions";
import { bouquetsArraySelector } from "../store/selectors/bouquet.selector";
import { favoritesArraySelector } from "../store/selectors/favorites.selector";
import { flowersArraySelector } from "../store/selectors/flowers.selector";
import { LoadBackService } from "./loadback.service";
import {BouquetsService} from "../sections/bouquets/bouquets.service";
import {FlowersService} from "../sections/flowers/flowers.service";
import {CompositionService} from "../sections/compositions/compositions.service";
import {GiftsService} from "../sections/gifts/gifts.service";
import { priceTo, priceFrom } from "../service/function-sorting";
import {flowers, reason} from "../interfaces/tags/tags-interface";



@Injectable()
export class MainService {
  private url: string = "";
  public products$: Observable<ProductInterface[]> = this.store.select(bouquetsArraySelector);
  // public products$: Observable<ProductInterface[]> | undefined ;


  public addElement: ProductInterface | undefined;
  // public originalArray: ProductInterface[] = [];
  public copyArray: ProductInterface[] = []; // будет выводить товар сортировать и тд


  // для сорта
  public originalArray: ProductInterface[] = [];
  public arrayShowProduct: ProductInterface[] = [];
  private categories: string = "";
  public priceMin: number = 0;
  public priceMax: number = 0;
  public flowersTag: flowers[] = [];
  public reasonTag: reason[] = [];


  constructor(private loadBackService: LoadBackService,
              private store: Store,
              private bouquetService: BouquetsService,
              private flowersService: FlowersService,
              private compositionService: CompositionService,
              private giftsService: GiftsService,
  ) {


  }


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

  // favorite on off

  public addFavorite(element: ProductInterface): void {
    const objCopy: ProductInterface = Object.assign({}, element);
    switch (element.categories) {
      case Categories.bouquets: {
        this.store.dispatch(bouquetsChangeFavorites({element: element}));
        this.loadBackService.ChangeFavoritParamet(`http://localhost:3000/bouquets/${element._id}`, objCopy);
        break;
      }
      case Categories.flowers: {
        this.store.dispatch(changeFavoritesFlowers({element: element}));
        this.loadBackService.ChangeFavoritParamet(`http://localhost:3000/flowers/${element._id}`, objCopy);
        break;
      }
    }
    if (!element.favorite) {
      objCopy.favorite = !objCopy.favorite;
      this.loadBackService.postElement("http://localhost:3000/favorites", objCopy);
      this.store.dispatch(favoritesAddElement({element: objCopy}));
    } else {
      objCopy.favorite = !objCopy.favorite;
      this.loadBackService.deleteElement(`http://localhost:3000/favorites/${element._id}`);
      this.store.dispatch(favoritesDeleteElement({element: element}));
    }
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


    console.log(copyArray);
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
