import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})

export class TelaLoginComponent implements OnInit {

  ngOnInit(): void {
      
  }

  public formLogin:FormGroup;

  constructor(private fb:FormBuilder, private loginService:LoginService, private route:Router){
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

  public submitForm(){
    const {username, password} = this.formLogin.value;
    this.formLogin.reset();

    this.loginService.login(username, password).subscribe(
      res => {
        this.route.navigate(['/tela-principal-GE']);
      },
      err =>{
        this.route.navigate(['/tela-principal-GE']);
      }
    )
  }

}