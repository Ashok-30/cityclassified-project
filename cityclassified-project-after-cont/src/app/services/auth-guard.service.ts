import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn(route.params.username))
      return true;

    this.router.navigateByUrl('user-login');
    return false;
  }

  canActivateAdmin(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAdminLoggedIn())
      return true;

    this.router.navigateByUrl('admin-login');
    return false;
  }

}