import { Component, OnInit } from '@angular/core';

interface Instituicao {
  tipo: string;
}

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})

export class TelaInicialComponent implements OnInit {
  
  email: string | undefined;
  celular: string | undefined;

  tipoInstituicao: Instituicao [] | undefined;
  selectInstituicao: Instituicao | undefined;

  ngOnInit(): void {
    this.tipoInstituicao = [
      {tipo: 'Escola - até Fund. I'},
      {tipo: 'Escola - até Fund. II'},
      {tipo: 'Escola - até Ens. Médio'},
      {tipo: 'Universidade'},
      {tipo: 'Outro caso'}
    ] 

  }

  enviaDados(){
    window.alert('Dados enviados, em breve um consultor entrará em contato');
  }

}
