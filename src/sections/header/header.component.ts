import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { LoadBackService } from "../../service/loadback.service";
import { userSelector } from "../../store/selectors/user.selector";
import { initializtionUser, UsersInterface } from "../../store/states/state-categories/user-state";

@Component({
  selector: "header-component",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss", "./header.style.scss"]
})
export class HeaderComponent {

  public switchBurger: boolean = false;
  private user$: Observable<UsersInterface> = this.store.select(userSelector);
  public user: UsersInterface = initializtionUser;

  constructor( private loadBackService: LoadBackService, public store: Store) {
    this.user$.subscribe( user => {
      this.user = user;
    });
  }


  burger(): void {
    this.switchBurger = !this.switchBurger;
  }

  closeBurger(): void {
    this.switchBurger = !this.switchBurger;
  }
}
