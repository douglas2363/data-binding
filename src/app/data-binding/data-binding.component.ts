import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'www.facebook.com/douglasbonitaopracarai';
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  cursoAngular: boolean = true;
  valortAtual: string = "";
  valorSalvo:string="";

  nome: string = 'abc';

  pessoa: any = {

    nome: 'def',
    idade:20

  }

  getCurtirCurso() {

    return true;

  }

  getValor() {
    return 1;
  }

  botaoClicado() {
    alert('Botão clicado');

  }

  onkeyUp(evento: KeyboardEvent) {

  this.valortAtual = (<HTMLInputElement>evento.target).value;
  console.log(this.valortAtual);

  }

  salvarValor(valor){
    
    this.valorSalvo = valor;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
