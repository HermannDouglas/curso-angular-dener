import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title></app-title>
    <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
  }
  
}
