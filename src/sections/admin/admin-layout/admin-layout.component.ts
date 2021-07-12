


import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { LoadBackService } from "../../../service/loadback.service";
import { userSelector } from "../../../store/selectors/user.selector";
import { initializtionUser, UsersInterface } from "../../../store/states/state-categories/user-state";


@Component({
  selector: "admin-layout-component",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLayoutComponent  {

  private user$: Observable<UsersInterface> = this.store.select(userSelector);
  public user: UsersInterface = initializtionUser;

  constructor( private loadBackService: LoadBackService, public store: Store) {
    this.user$.subscribe( user => {
      this.user = user;
    });
  }

}
