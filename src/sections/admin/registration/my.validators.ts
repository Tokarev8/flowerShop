import {FormControl, FormGroup, ValidatorFn} from "@angular/forms";


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

  // static repetitionLogin
  // static repetitionEmail


}

// export function sameValueAs(group: FormGroup, controlName: string): ValidatorFn {
//   return (control: FormControl) => {
//     const myValue = control.value;
//     const compareValue = group.controls[controlName].value;
//
//     return (myValue === compareValue) ? null : {valueDifferentFrom:controlName}; };
// }
