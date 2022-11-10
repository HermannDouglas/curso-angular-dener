import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Hermann";
  public idade: number = 29; 
  public maisUm: number = 1;

  public checkedDisabled: boolean = true; 
  public imgSrc: string = "https://vidafullstack.com.br/wp-content/uploads/2021/12/banner.jpg";
  public imgTitle: string = "Property Binding";

  public position: { x: number, y: number } = { x: 0, y: 0 };
  constructor() { }

  ngOnInit(): void {  }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
