import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  registerForm = new FormGroup({
    email: new FormControl("", Validators.required),
    pwd: new FormControl("", Validators.required),
  });

  register() {
    console.log(this.registerForm.get("email")?.value);
    console.log(this.registerForm.get("pwd")?.value);
  }

  authRegister() {

  }
}
