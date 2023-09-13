import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth.service";
import {CookieManageService} from "../../../../service/cookie-manage.service";
import {Title} from "@angular/platform-browser";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private afAuth: AuthService,private authCookieService:CookieManageService,private router:Router,private title:Title) {
  }

  ngOnInit(): void {
    if (this.authCookieService.isExisting("my-token")) {
      this.title.setTitle("DashBoard");
      this.router.navigateByUrl("dashboard");
    }
  }
  loginForm = new FormGroup({
    email: new FormControl("", Validators.required),
    pwd: new FormControl("", Validators.required),
  });

  loginWithEmailAndPwd() {
let email=this.loginForm.get("email")?.value;
let pwd=this.loginForm.get("pwd")?.value;
  this.afAuth.authSignInWithEmailAndPassword(email,pwd);

  }


 authLoginWithGoogle() {
    this.afAuth.authLoginWithGoogle();
  }


}
