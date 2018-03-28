import { AbstractControl, ValidatorFn } from '@angular/forms'

export class Validators {
  static startsWith(letter : string) : ValidatorFn {
    return (control: AbstractControl) : {[key: string]: any} => {
      if (control.value && !control.value.startsWith(letter)) {
        return {
          startsWith: letter
        }
      }

     return null;
    }
  }
}
