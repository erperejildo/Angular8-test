import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Injectable()
export class PageTwoRouteGuard implements CanActivate {
  constructor(private navigationService: NavigationService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const params = route.children[0].queryParams;
    // very silly check but we could replace this
    // with an API call to our backend instead
    if ((params.name && params.email) || this.navigationService.logged) {
      this.navigationService.logged = true;
      return true;
    }
    this.navigationService.showLogin = true;
    return false;
  }
}
