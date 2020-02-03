import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  logged = false;
  showLogin = false;

  constructor() {}
}
