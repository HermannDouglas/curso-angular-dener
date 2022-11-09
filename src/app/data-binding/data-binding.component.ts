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

  constructor() { }

  ngOnInit(): void {
  }

}
