import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadingBouquets } from "../store/actions/bouquets.actions";
import { loadingBasket } from "../store/actions/basket.actions";
import { loadingComposistions } from "../store/actions/compositions.actions";
import { initializationFavoritesArray } from "../store/actions/favorites.actions";
import { loadingFlowers } from "../store/actions/flowers.actions";
import { loadingGifts } from "../store/actions/gifts.actions";
import { loadingPopular } from "../store/actions/popular.actions";
import { loadingPromotions } from "../store/actions/promotions.actions";
import { loadingUsers } from "../store/actions/users.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {








  constructor(private store: Store, private ref: ChangeDetectorRef) {

  // загружаем данные с бека
    this.store.dispatch(loadingBouquets());
    this.store.dispatch(initializationFavoritesArray());
    this.store.dispatch(loadingFlowers());
    this.store.dispatch(loadingComposistions());
    this.store.dispatch(loadingGifts());
    this.store.dispatch(loadingPromotions());
    this.store.dispatch(loadingPopular());
    this.store.dispatch(loadingBasket());
    this.store.dispatch(loadingUsers());


    setInterval(() => {
      this.ref.markForCheck();
    }, 100);

}




}
