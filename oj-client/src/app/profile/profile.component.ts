import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
