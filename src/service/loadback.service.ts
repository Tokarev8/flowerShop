import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductInterface } from "../interfaces/product-state";



@Injectable()
export class LoadBackService {

   public array: ProductInterface[] = [];
  constructor(private http: HttpClient) {



  }

  getArray(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>("http://localhost:3000/bouquets");
  }

}
