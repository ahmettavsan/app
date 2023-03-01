import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';


export function passwordValidator(): ValidatorFn {
  var validationFunction = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    // const rules=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$+/test(value);

    const isValid = hasUpperCase && hasLowerCase && hasNumeric;

    return isValid ? null : { passwordFormat: true };
  };

  return validationFunction;
}
