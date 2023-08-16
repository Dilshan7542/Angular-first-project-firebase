import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import {LoginComponent} from "./component/login/login.component";
import {SignupComponent} from "./component/signup/signup.component";

const routes: Routes =  [{ path: '', component: SecurityComponent ,children:[
    {path:"",redirectTo:"login",pathMatch:"full"},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
