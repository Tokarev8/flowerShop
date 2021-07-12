import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoadBackService } from "../../../service/loadback.service";
import { AddProductComponent } from "../add-product/add-product.component";
import { AdminLayoutComponent } from "../admin-layout/admin-layout.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { EditProductComponent } from "../edit-product/edit-product.component";
import { EditService } from "../edit-product/edit.service";
import { OrderPageComponent } from "../order-page/order-page.component";
import { OrderService } from "../order-page/order-page.service";
import { OrderComponent } from "../order-page/order/order.component";
import { RegistrationComponent } from "../registration/registration.component";


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AddProductComponent,
    DashboardComponent,
    EditProductComponent,
    OrderPageComponent,
    RegistrationComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "", component: AdminLayoutComponent, children: [
          {path: "", redirectTo: "/admin", pathMatch: "full" },
          {path: "dashboard", component: DashboardComponent},
          {path: "add", component: AddProductComponent},
          {path: "edit", component: EditProductComponent},
          {path: "orders", component: OrderPageComponent, },
          {path: "orders/:number", component: OrderComponent},
        ]
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [LoadBackService, EditService, OrderService],
})
export class AdminModule {

}
