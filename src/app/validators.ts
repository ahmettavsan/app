import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function barcodeValidator(): ValidatorFn {
  const validationFunc = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const value = control.value;
    if(!value) return null;
    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const isValid = hasLowerCase && hasNumeric && hasUpperCase;
    return isValid ? null : { barcodeFormat: true };
  };
  return validationFunc;
}
