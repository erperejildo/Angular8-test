import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // TODO change to module
})
export class NavigationService {
  visitedPageThree = false;

  constructor() {}
}
