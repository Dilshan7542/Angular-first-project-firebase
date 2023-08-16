import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from 'firebase/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl("", Validators.required),
    pwd: new FormControl("", Validators.required),
  });

  login() {
    console.log(this.loginForm.get("email")?.value);
    console.log(this.loginForm.get("pwd")?.value);

  }

  constructor(private afAuth: AngularFireAuth) {
  }
  AuthLogin() {
    this.afAuth
      .signInWithPopup(new GoogleAuthProvider())
      .then((result) => {
        console.log('You have been successfully logged in!');
      });

  }
}
