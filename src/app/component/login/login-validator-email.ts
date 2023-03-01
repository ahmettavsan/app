import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';


export function emailValidator(): ValidatorFn {
  var validationFunction = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

// const hasMailFormat1=String(value).includes('@');
// const hasMailFormat2=String(value).includes('.com');

const hasMailFormatRegex=/^\S+@\S+\.\S+$/.test(value);

    const isValid = hasMailFormatRegex;

    return isValid ? null : { emailFormat: true };
  };

  return validationFunction;
}
