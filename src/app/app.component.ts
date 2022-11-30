import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-new-component></app-new-component>
  <hr>
  <app-diretivas-atributos></app-diretivas-atributos>
  <hr>
  <app-diretivas-atributos>
  <h1>Aulas de Diretivas Atributo</h1>
  <h3>Final da aula</h3>
  </app-diretivas-atributos>
  
  <app-diretivas-atributos>
  <h1>Hall Jordan</h1>
  <h3>Hank Pym</h3>
  </app-diretivas-atributos>
  
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
