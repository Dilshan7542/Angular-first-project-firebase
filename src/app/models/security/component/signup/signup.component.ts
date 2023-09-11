import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../service/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private authService:AuthService) {
  }
  static temp:any;

  registerForm = new FormGroup({
    email: new FormControl("", Validators.required),
    pwd: new FormControl("", Validators.required),
  });
  register() {
    let email= this.registerForm.get("email")?.value;
    let pwd = this.registerForm.get("pwd")?.value;
    this.authService.authCreateUserEmailAndPwd(email,pwd);
  }

  authRegister() {

  }
}
