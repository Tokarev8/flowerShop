import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostProductInterface, ProductInterface } from "../interfaces/product-state";
import { BasketInterface } from "../store/states/state-categories/basket-state";
import { OrderInterface } from "../store/states/state-categories/orders-state";
import { PostUser, UsersInterface } from "../store/states/state-categories/user-state";




@Injectable()
export class LoadBackService {

  private array: ProductInterface[] = [];
  constructor(private http: HttpClient) {}

  getArray(url: string): Observable<ProductInterface[]>  {
    return this.http.get<ProductInterface[]>(url);
  }

  getArrayUsers(url: string): Observable<UsersInterface[]> {
    return this.http.get<UsersInterface[]>(url);
  }

  getArrayBasket(url: string): Observable<BasketInterface[]> {
    return this.http.get<BasketInterface[]>(url);
  }

  getArrayOrders(url: string): Observable<OrderInterface[]> {
    return this.http.get<OrderInterface[]>(url);
  }

  postElement(url: string,
              element: ProductInterface
                | PostProductInterface
                | BasketInterface
                | PostUser
                | OrderInterface): void {
    this.http.post(url, element).subscribe();
  }



  deleteElement (url: string): void {
    this.http.delete(url).subscribe();
  }

  // tslint:disable-next-line:no-any
  putElement (url: string , element: any): void {
    // tslint:disable-next-line:no-any
    this.http.put<any>(url, element).subscribe();
  }


  ChangeFavoritParamet (url: string , element: ProductInterface): void {
    this.http.put<ProductInterface>(url, { favorite: !element.favorite}).subscribe();
  }



}
