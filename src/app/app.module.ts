import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { BasketComponent } from "../sections/basket/basket.component";
import { BouquetsComponent } from "../sections/bouquets/bouquets.component";
import { FavoritesComponent } from "../sections/favorites/favorites.component";
import { FlowersComponent } from "../sections/flowers/flowers.component";
import { FooterComponent } from "../sections/footer/footer.component";
import { HeaderComponent } from "../sections/header/header.component";
import { ProductComponent } from "../sections/product/product.component";
import { ShowProductsComponent } from "../sections/show-products/show-products.component";
import { LoadBackService } from "../service/loadback.service";
import { MainService } from "../service/main.service";
import { BouquetsEffects } from "../store/effects/bouquets.effects";
import { FavoritesEffects } from "../store/effects/favorites.effects";
import { FlowersEffects } from "../store/effects/flowers.effects";
import { metaReducers, reducers } from "../store/reducers";

import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminComponent } from "../sections/admin/admin-panel/admin.component";
import { AuthService } from "../sections/admin/login-page/auth.service";
import { LoginPageComponent } from "../sections/admin/login-page/login-page.component";
import { BasketService } from "../sections/basket/basket.service";
import { BouquetsService } from "../sections/bouquets/bouquets.service";
import { CompositionsComponent } from "../sections/compositions/compositions.component";
import { CompositionService } from "../sections/compositions/compositions.service";
import { FavoritesService } from "../sections/favorites/favorites.service";
import { FlowersService } from "../sections/flowers/flowers.service";
import { GiftsComponent } from "../sections/gifts/gifts.component";
import { GiftsService } from "../sections/gifts/gifts.service";
import { MainLayoutComponent } from "../sections/main-layout/main-layout.component";
import { PopularComponent } from "../sections/popular/popular.component";
import { PopularService } from "../sections/popular/popular.service";
import { ProductService } from "../sections/product/product.service";
import { PromotionsComponent } from "../sections/promotions/promotions.component";
import { PromotionsService } from "../sections/promotions/promotions.service";
import { MenuComponent } from "../sections/show-products/menu/menu.component";
import { MenuService } from "../sections/show-products/menu/menu.service";
import { SimilarProductsComponent } from "../sections/similar-products/similar-products.component";
import { BasketEffects } from "../store/effects/basket.effects";
import { CompositionsEffects } from "../store/effects/compositions.effects";
import { GiftsEffects } from "../store/effects/gifts.effects";
import { OrdersEffects } from "../store/effects/orders.effects";
import { PopularEffects } from "../store/effects/popular.effects";
import { PromotionsEffects } from "../store/effects/promotions.effects";
import { UsersEffects } from "../store/effects/users.effects";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppEffects } from "./app.effects";



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    FavoritesComponent,
    BasketComponent,
    FooterComponent,
    BouquetsComponent,
    ShowProductsComponent,
    FlowersComponent,
    CompositionsComponent,
    GiftsComponent,
    PromotionsComponent,
    PopularComponent,
    MenuComponent,
    AdminComponent,
    MainLayoutComponent,
    LoginPageComponent,
    SimilarProductsComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects,
      BouquetsEffects,
      FavoritesEffects,
      FlowersEffects,
      CompositionsEffects,
      GiftsEffects,
      PromotionsEffects,
      BasketEffects,
      PopularEffects,
      UsersEffects,
      OrdersEffects,

    ]),
  ],
  providers: [
    LoadBackService,
    MainService,
    BouquetsService,
    FavoritesService,
    FlowersService,
    CompositionService,
    GiftsService,
    PromotionsService,
    PopularService,
    BasketService,
    MenuService,
    ProductService,
    AuthService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
