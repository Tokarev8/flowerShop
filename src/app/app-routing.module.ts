import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "../sections/admin/admin-panel/admin.component";
import { BasketComponent } from "../sections/basket/basket.component";
import { BouquetsComponent } from "../sections/bouquets/bouquets.component";
import { CompositionsComponent } from "../sections/compositions/compositions.component";
import { FavoritesComponent } from "../sections/favorites/favorites.component";
import { FlowersComponent } from "../sections/flowers/flowers.component";
import { GiftsComponent } from "../sections/gifts/gifts.component";
import { MainLayoutComponent } from "../sections/main-layout/main-layout.component";
import { PopularComponent } from "../sections/popular/popular.component";
import { ProductComponent } from "../sections/product/product.component";
import { PromotionsComponent } from "../sections/promotions/promotions.component";



const routes: Routes = [
  {path: "", component: MainLayoutComponent, children: [
      {path: "", redirectTo: "/", pathMatch: "full"},
      {path: "", component: PopularComponent},
      {path: "bouquets", component: BouquetsComponent},
      {path: "basket", component: BasketComponent},
      {path: "favorites", component: FavoritesComponent},
      {path: "bouquets", component: BouquetsComponent},
      {path: "product/:id", component: ProductComponent},
      {path: "flowers", component: FlowersComponent},
      {path: "compositions", component: CompositionsComponent},
      {path: "gifts", component: GiftsComponent},
      {path: "promotions", component: PromotionsComponent},
    ]},

      {path: "admin", loadChildren: () => import("../sections/admin/admin-panel/admin.module")
          .then(m => m.AdminModule)},
      // {path: "admin", loadChildren: "../sections/admin-panel/admin.module#AdminModule"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
