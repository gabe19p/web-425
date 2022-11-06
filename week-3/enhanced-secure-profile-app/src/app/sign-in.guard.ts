/**
 * Title: sign-in.guard.ts
 * Author: Danial Purselley
 * Date: 6 Nov 2022
 * Description: basic profile angular
 * application f/ web-425
 */

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgIfContext } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isLoggedIn = route.queryParams['isLoggedIn'];
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
