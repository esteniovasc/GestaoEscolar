import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})

export class TelaLoginComponent {
  username: string | undefined;
  password!: string;
  validacao: boolean = false;

  public formLogin:FormGroup;

  constructor(private fb:FormBuilder){
    this.formLogin = this.criarFormLogin();
  }

  public criarFormLogin():FormGroup{
      return this.fb.group({
        username:["", [Validators.required, Validators.minLength(5)]],
        password:["", [Validators.required, Validators.minLength(6)]]
      })
  }

  public isFormControlInvalid(controlName:string):boolean{
    return !!(this.formLogin.get(controlName)?.invalid && this.formLogin.get(controlName)?.touched)
  }

}
