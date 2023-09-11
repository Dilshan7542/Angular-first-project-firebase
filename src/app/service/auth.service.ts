import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth'; // this path must be this path don't take intellij idea default path
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth,private route:Router) {}
  // Sign in with Google

  // Auth logic to run auth providers
  authLoginWithGoogle() {
     this.afAuth
      .signInWithPopup(new GoogleAuthProvider())
      .then((result) => {
        console.log('You have been successfully logged in!');
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
