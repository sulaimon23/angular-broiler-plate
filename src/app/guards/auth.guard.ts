import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    //
    const isAuth = true;
    const url = state.url;

    if (isAuth && url.includes('auth')) {
      return this.router.parseUrl('/'); // Redirect to enterprise if user is already logged in and tries to access the /auth route
    }

    if (!isAuth && !url.includes('auth')) {
      return this.router.parseUrl('/auth'); // Redirect to login page if user is not logged in and tries to access any other page
    }

    return true;
  }
}
