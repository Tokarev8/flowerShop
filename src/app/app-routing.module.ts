import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasketComponent } from "../sections/basket/basket.component";
import { FavoritesComponent } from "../sections/favorites/favorites.component";
import { ProductComponent } from "../sections/product/product.component";
import { AppComponent } from "./app.component";


const routes: Routes = [
  {path: "basket", component: BasketComponent},
  {path: "favorites", component: FavoritesComponent},
  {path: "product", component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
