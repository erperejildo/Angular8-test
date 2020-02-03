import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  onSubmit() {
    // this.router.navigateByUrl('/page-two', {
    //   state: { preferredMuseum: 'world' }
    // });
  }
}
