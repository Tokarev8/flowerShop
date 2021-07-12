import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoadBackService } from "../../../service/loadback.service";
import {  PostUser } from "../../../store/states/state-categories/user-state";





@Component({
  selector: "registration-component",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent  {

  public formReg: FormGroup;

  constructor(private loadBackService: LoadBackService, private router: Router) {


    this.formReg = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      login: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]), // добавить валидтор который проверяет нет ли такого же логина в беке
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      repeatPassword: new FormControl("", [Validators.required, this.validatorConfirmedPassword("password")])
    });

  }

  private validatorConfirmedPassword(fieldName: string): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {return null; }
      return control.value === control.root.get(fieldName)?.value ? null : { someError: true };
    };
  }



  public submit(): void {
    if (this.formReg.valid) {
      const formData = {...this.formReg.value};
      this.translate(formData);
      this.router.navigate(["/"]);

    }
  }

  // tslint:disable-next-line:no-any
  private translate( object: any): void {

    const userSend: PostUser = {
      login: object.login,
      email: object.email,
      password: object.password,
      status: false,
      basked: [],
      favorite: [],
    };

    const url: string = "http://localhost:3000/user";

    this.loadBackService.postElement(url, userSend);

  }
}
