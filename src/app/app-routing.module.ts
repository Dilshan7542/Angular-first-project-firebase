import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {authGuard} from "./service/auth.guard";

const routes: Routes = [
  { path: 'security', loadChildren: () => import('./models/security/security.module').then(m => m.SecurityModule) },
  { path: 'dashboard', loadChildren: () => import('./models/dashboard/dashboard.module').then(m => m.DashboardModule) ,canActivate:[authGuard] /*import auth.guard*/},
  {path:"",redirectTo:"security",pathMatch:"full"},
  {path:"**",redirectTo:"not-found",pathMatch:"full"},
  {path:"not-found",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
