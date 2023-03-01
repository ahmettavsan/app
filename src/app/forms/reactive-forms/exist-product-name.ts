import {AsyncValidatorFn,AbstractControl} from '@angular/forms'
import{map}
 from 'rxjs';
import { PostserviceService } from 'src/app/services/postservice.service';

export function ExistProductNameValidator(
  postService: PostserviceService
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return postService
      .searchByProductName(control.value)
      .pipe(map((x) => (x.length > 0 ? { productExist: true } : null)));
  };
}
