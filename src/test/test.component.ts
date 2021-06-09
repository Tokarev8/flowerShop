import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { ProductInterface } from "../interfaces/product-state";
import { LoadBackService } from "../service/loadback.service";
import { initialBouquets } from "../store/actions/bouquets.actions";
import { bouquetsArraySelector } from "../store/selectors/bouquet.selector";

@Component({
  selector: "test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoadBackService]
})

export class TestComponent implements OnInit {



  public bouquets$: Observable<ProductInterface[]> = this.store.select(bouquetsArraySelector);


  constructor(private http: HttpClient, private store: Store, private ld: LoadBackService) {

// setTimeout(() => {console.log(this.bouquets); }, 5000);



  }

  ngOnInit(): void {
     this.store.dispatch(initialBouquets());
  }

  public testMethod (): void {

   }

  public getBouquets(): void {
     // this.bouquets$.next(this.ld.getArray());
   // console.log(this.bouquets);
    this.store.dispatch(initialBouquets());

    }




  }



/*
  public getBouquets(): void {
    this.http.get<ToDo[]>("http://localhost:3000/bouquets").subscribe(response => {
      console.log("REsponse", response);
      this.Todo = response;

      this.array$.next(response);
      console.log(this.bouquets$  );


    });
  }
 */
