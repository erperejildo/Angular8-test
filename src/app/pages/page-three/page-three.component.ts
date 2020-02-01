import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    // this loads before anything
    this.navigationService.visitedPageThree = true;
  }
}
