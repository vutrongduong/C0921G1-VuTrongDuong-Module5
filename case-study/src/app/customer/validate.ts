import {AbstractControl} from '@angular/forms';
import {Customer} from '../model/customer';

export class Validate {

  // checkAge(control: AbstractControl): any {
  //   const yearAge = Number(control.value.substr(0, 4));
  //   const yearCur = new Date().getFullYear();
  //   return yearCur - yearAge >= 18 ? null : {checkAge: true};
  // }

  checkExitsId(id: number, list: Customer[]): any {
    for (let c of list) {
      if (id == c.customerId) {
        return {exitsId: true};
      }
    }
    return false;
  }

  checkExitsIdCard(idCard: string, list: Customer[]): any {
    for (let c of list) {
      if (idCard == c.customerIdCard) {
        return {exitsId: true};
      }
    }
    return false;
  }

  checkExitsEmail(email: string, list: Customer[]): any {
    for (let c of list) {
      if (email == c.customerEmail) {
        return {exitsId: true};
      }
    }
    return false;
  }
}
