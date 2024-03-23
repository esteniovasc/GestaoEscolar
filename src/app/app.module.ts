import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { DividerModule } from 'primeng/divider';
import { ScrollTopModule } from 'primeng/scrolltop';

import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DividerModule,
    MessagesModule,
    BrowserAnimationsModule,
    FormsModule,
    FloatLabelModule,
    InputTextModule,
    InputMaskModule,
    PasswordModule,
    ScrollTopModule,
    RouterModule.forRoot([
      {path: '', component: TelaLoginComponent},
      {path: 'tela-inicial', component: TelaInicialComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }