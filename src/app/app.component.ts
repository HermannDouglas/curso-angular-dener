import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponent()">Destruir componente</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  
  public destruir: boolean = true;
  
  constructor() {}

  public destruirComponent() {
    this.destruir = false;
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");      
  }
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");      
  }
  
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");      
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");      
  }
  
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");      
  }

}
