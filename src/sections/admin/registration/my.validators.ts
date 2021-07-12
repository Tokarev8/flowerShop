import { FormControl, FormGroup, ValidatorFn } from "@angular/forms";


export class MyValidators {

  static repetitionPassword(control: FormControl, control2: FormControl): {[key: string]: boolean} {

      return {"notEqual": control.value === control2.value };
  }

  // tslint:disable-next-line:typedef
  static checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.get("password")?.value;
    const confirmPass = group.get("confirmPass")?.value;

    return pass === confirmPass ? null : { notSame: true };
  }
}
