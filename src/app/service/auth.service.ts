import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth'; // this path must be this path don't take intellij idea default path
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from "@angular/router";
import {CookieManageService} from "./cookie-manage.service";
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth,private route:Router,private cookie:CookieManageService) {}
  // Sign in with Google

  // Auth logic to run auth providers
  authLoginWithGoogle() {
     this.afAuth
      .signInWithPopup(new GoogleAuthProvider())
      .then((result) => {
        console.log('You have been successfully logged in!');
        this.cookie.createCookie("1234");
        this.route.navigateByUrl("dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  authSignInWithEmailAndPassword(email:any,pwd:any){
    this.afAuth.signInWithEmailAndPassword(email!,pwd !).then(resp =>{
  console.log(resp);
  this.route.navigateByUrl("dashboard");
});

  }
  authCreateUserEmailAndPwd(email:any,pwd:any){
    this.afAuth.createUserWithEmailAndPassword(email,pwd).then(resp =>{
      console.log(resp);
    });
  }



}
