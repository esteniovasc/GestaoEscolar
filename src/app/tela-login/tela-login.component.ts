import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})
export class TelaLoginComponent {
  username: string | undefined;
  password!: string;
  validacao: boolean = false;

  validaEntrada(){
    if (this.username=='admin' && this.password=='admin'){
        this.validacao=true;
    }
  }

}
