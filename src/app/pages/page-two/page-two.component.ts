import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {
  // data = this.location.getState(); // there are more ways to take params from previous pages
  params = this.activatedRoute.parent.snapshot.queryParams;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
}
