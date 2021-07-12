import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { setUser } from "../../../store/actions/user.actions";
import { loadingUsers } from "../../../store/actions/users.actions";
import { userSelector } from "../../../store/selectors/user.selector";
import { usersArraySelector } from "../../../store/selectors/users.selector";
import { initializtionUser, UsersInterface } from "../../../store/states/state-categories/user-state";


@Component({
  selector: "login-page-component",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  private usersArray: UsersInterface[] = [];
  private users$: Observable<UsersInterface[]> = this.store.select(usersArraySelector);
  public userNotFound: boolean = false;
  private user$: Observable<UsersInterface> = this.store.select(userSelector);
  private user: UsersInterface = initializtionUser;


  constructor(private store: Store, private route: Router) {
    this.store.dispatch(loadingUsers());
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

    this.users$.subscribe(array => {
      this.usersArray = array;
    });

    this.user$.subscribe(element => {
      this.user = element;
    });
  }


  ngOnInit(): void {
  }


  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    for (const element of this.usersArray) {
      if (element.email === user.email && element.password === user.password) {
        this.store.dispatch(setUser({user: element}));
        this.route.navigate([""]);
        this.userNotFound = false;
        break;
      }
    }
    if (this.user.email !== user.email) {
      this.userNotFound = true;
    }
    this.form.reset();
  }

}
