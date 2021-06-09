import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { BasketComponent } from "../sections/basket/basket.component";
import { FavoritesComponent } from "../sections/favorites/favorites.component";
import { FooterComponent } from "../sections/footer/footer.component";
import { HeaderComponent } from "../sections/header/header.component";
import { ProductComponent } from "../sections/product/product.component";
import { LoadBackService } from "../service/loadback.service";
import { BouquetsEffects } from "../store/effects/bouquets.effects";
import { metaReducers, reducers } from "../store/reducers";
import { TestComponent } from "../test/test.component";
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
    TestComponent, // Тeстовый компонент, потом удалить
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects, BouquetsEffects]),
  ],
  providers: [LoadBackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
