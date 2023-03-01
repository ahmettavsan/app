import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExistProductNameValidator } from 'src/app/forms/reactive-forms/exist-product-name';
import { Member } from 'src/app/models/member';
import { PostserviceService } from 'src/app/services/postservice.service';
import { passwordValidator } from './login-validator';
import { emailValidator } from './login-validator-email';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
isExist:boolean=false;
  newMember: Member | undefined = undefined;
constructor(private fb:FormBuilder,private postService:PostserviceService){

}
  public memberForm = this.fb.group({
    password: [
      '',
      {
        Validators: [Validators.required,passwordValidator()],
        asyncValidators: [ExistProductNameValidator(this.postService)],
      },
    ],
    email:['',[Validators.required,emailValidator()]],
    isRememberMe:[false]

  })

  save() {
    this.newMember = this.memberForm.value as Member;
    console.log(this.newMember);
    this.isExist=true;

  }

  isInvalid(controlName: string): boolean {
    let control = this.memberForm.get(controlName)!;

    if (!(control.invalid && (control.dirty || control.touched))) return false;

    if (control.errors?.['required']) return true;
    if (control.errors?.['emailFormat']) return true;
    if (control.errors?.['passwordFormat']) return true;




    return false;
  }

  isValid(controlName: string) {
    let control = this.memberForm.get(controlName)!;
    return control.valid && (control.dirty || control.touched);
  }

  getControl(controlName: string) {
    return this.memberForm.get(controlName)!;
  }

  isInvalidControl(controlName: string, validationName: string) {
    return this.getControl(controlName).errors?.[validationName];
  }

}
