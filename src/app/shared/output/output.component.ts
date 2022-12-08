import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();
  public list: Array<{nome: string, idade: number}> = [
    { nome: "Hermann Douglas", idade: 29 },
    { nome: "Diana Prince", idade: 25 },
    { nome: "Barry Allen", idade: 28 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }

}
