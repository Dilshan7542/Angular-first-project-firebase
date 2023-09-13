import {CanActivateFn, Router} from '@angular/router';
import {inject, Inject} from "@angular/core";

import {CookieManageService} from "./cookie-manage.service";
import {AuthService} from "./auth.service";
import {LoginComponent} from "../models/security/component/login/login.component";
import {CookieService} from "ngx-cookie-service";

export const authGuard: CanActivateFn = (route, state):boolean => {
  let router:Router = inject(Router);
  let cookie:CookieService = inject(CookieService);

  console.log(router);
  console.log(cookie);
  if(cookie.check("my-token")){
   return true;
  }else{
  }
    router.navigateByUrl("security").then();
  return false;
};
