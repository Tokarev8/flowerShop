import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { initialStateProduct, ProductInterface } from "../../interfaces/product-state";

import { Store } from "@ngrx/store";
import { Categories } from "../../interfaces/categories";
import { LoadBackService } from "../../service/loadback.service";
import {
  ChangeFavoritesBouquets,
  favoritesBouquetsTrue,
} from "../../store/actions/bouquets.actions";
import { changeFavoritesComposistions, favoritesComposistionsTrue } from "../../store/actions/compositions.actions";
import { favoritesAddElements } from "../../store/actions/favorites.actions";
import { changeFavoritesFlowers, favoritesTrue } from "../../store/actions/flowers.actions";
import { changeFavoriteGifts, favoritesGiftsTrue } from "../../store/actions/gifts.actions";
import { setUser } from "../../store/actions/user.actions";
import { bouquetsArraySelector } from "../../store/selectors/bouquet.selector";
import { compositionsArraySelector } from "../../store/selectors/compositions.selector";
import { favoritesArraySelector } from "../../store/selectors/favorites.selector";
import { flowersArraySelector } from "../../store/selectors/flowers.selector";
import { giftsArraySelector } from "../../store/selectors/gifts.selector";
import { userSelector } from "../../store/selectors/user.selector";
import { Favorite, initializtionUser, UsersInterface } from "../../store/states/state-categories/user-state";




@Injectable()
export class FavoritesService {


  public favorites$: Observable<ProductInterface[]> = this.store.select(favoritesArraySelector);
  public arrayFavorites: ProductInterface[] = [];

  private user$: Observable<UsersInterface> = this.store.select(userSelector);
  public user: UsersInterface = initializtionUser;


  constructor(public store: Store, private loadBackService:  LoadBackService) {
    this.favorites$.subscribe( array => {
      this.arrayFavorites = array;
    });

    this.user$.subscribe( (user) => {
      this.user = user;
      this.setFavoriteArray();
    });
  }




  setFavoriteArray(): void {

    const FavoritArray: ProductInterface[] = [];
    let product: ProductInterface = initialStateProduct;

    if ( this.user.email !== "" || this.user.favorite.length > 0) {

      for ( const element of this.user.favorite) {
        product = initialStateProduct;

        switch (element.favoriteCategories) {

          case Categories.bouquets: {
            const product$: Observable<ProductInterface[]> = this.store.select(bouquetsArraySelector);
            product$.subscribe( array => {
              product =  Object.assign(
                {},
                array.find(el => el._id === element.favoriteId) ); }) ;
            if (product.name !== "") {
              this.store.dispatch(favoritesBouquetsTrue({newElement: product}));
              product.favorite = true;
              FavoritArray.push(product);
            }
            break; }

          case Categories.flowers: {
            const product$: Observable<ProductInterface[]> = this.store.select(flowersArraySelector);
            product$.subscribe( array => {
              product =  Object.assign(
                {},
                array.find(el => el._id === element.favoriteId) );
            });
            if (product.name !== "") {
                this.store.dispatch(favoritesTrue({newElement: product}));
                 product.favorite = true;
              FavoritArray.push(product);
            }
            break; }




          case Categories.compositions: {
            const product$: Observable<ProductInterface[]> = this.store.select(compositionsArraySelector);
            product$.subscribe( array => {
              product =  Object.assign(
                {},
                array.find(el => el._id === element.favoriteId) ); }) ;
            if (product.name !== "") {
              this.store.dispatch(favoritesComposistionsTrue({newElement: product}));
              product.favorite = true;
              FavoritArray.push(product);
            }
            break; }


          case Categories.gifts: {
            const product$: Observable<ProductInterface[]> = this.store.select(giftsArraySelector);
            product$.subscribe( array => {
              product =  Object.assign(
                {},
                array.find(el => el._id === element.favoriteId) ); }) ;
            if (product.name !== "") {
              this.store.dispatch(favoritesGiftsTrue({newElement: product}));
              product.favorite = true;
              FavoritArray.push(product);
            }
            break; }

          default: break;
        }
      }
    }
    this.store.dispatch(favoritesAddElements({newArray: FavoritArray}));


  }



  checkForAvailability(element: ProductInterface): boolean {
    for ( const el of this.arrayFavorites) {
      if (el._id === element._id) {
       return true;
      }
    }
    return false;
  }





  public addFavorite(element: ProductInterface): void {

    this.changeFavorite(element);
    let change: boolean = true;
    const newFavoriteArray: Favorite[] = [];

    if (this.user.favorite.length > 0) {
      this.user.favorite.forEach(el => {
        if (el.favoriteId !== element._id) {
          newFavoriteArray.push({
            favoriteId: el.favoriteId,
            favoriteCategories: el.favoriteCategories,
          });
        } else {
          change = false;
        }
      });
    }

    if (change) {
      newFavoriteArray.push({
        favoriteId: element._id,
        favoriteCategories: element.categories,
      });
    }

    const newUser: UsersInterface = Object.assign({}, this.user);
    newUser.favorite = newFavoriteArray;

    this.store.dispatch(setUser({user: newUser}));

    if (newUser.email !== "") {
      this.loadBackService.putElement(`http://localhost:3000/user/${this.user._id}`, newUser);
    }


   }






   private changeFavorite (element: ProductInterface): void {

    switch (element.categories) {
      case Categories.bouquets: {
        this.store.dispatch(ChangeFavoritesBouquets({element: element}));
        break; }
      case Categories.gifts: {
        this.store.dispatch(changeFavoriteGifts({element: element}));
        break; }
      case Categories.flowers: {
        console.log("Елемент попал в цветки");
        this.store.dispatch(changeFavoritesFlowers({element: element}));
        break; }
      case Categories.compositions: {
        this.store.dispatch(changeFavoritesComposistions({element: element}));
        break; }
      default:     console.log("Елемент обосрался", element.favorite); break;
    }

   }


  }
