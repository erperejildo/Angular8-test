import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {
  money = 1234;
  constructor() {}

  ngOnInit() {}

  countChange(moneyUpdated) {
    // we can detect when we modify the money inside money-converter component
    // from this point we could do some other operations
    console.log(moneyUpdated);
  }
}
