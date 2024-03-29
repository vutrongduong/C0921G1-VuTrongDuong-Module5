import {AbstractControl} from '@angular/forms';

export class Validate {
  checkAge(control: AbstractControl): any {
    const yearAge = Number(control.value.substr(0, 4));
    const yearCur = new Date().getFullYear();
    return yearCur - yearAge >= 18 ? null : {checkAge: true};
  }

  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirmPassword) ? null : {passwordnotmatch: true};
  }
}
