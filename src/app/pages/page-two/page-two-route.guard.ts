import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Injectable()
export class PageTwoRouteGuard implements CanActivate {
  constructor(private navigationService: NavigationService) {}

  canActivate(): boolean {
    if (this.navigationService.visitedPageThree) {
      return true;
    }
    alert('Have a look to the page three first');
    return false;
  }
}
