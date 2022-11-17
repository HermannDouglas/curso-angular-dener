import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-diretivas-atributos></app-diretivas-atributos>
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <app-data-binding></app-data-binding>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit { 
  
  constructor() {}


  ngOnInit(): void {
  }


}
