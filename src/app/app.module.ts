import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ReactiveFormsModule } from '@angular/forms';

import { DividerModule } from 'primeng/divider';
import { ScrollTopModule } from 'primeng/scrolltop';

import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CardModule } from 'primeng/card';

import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TelaPrincipalGEComponent } from './tela-principal-GE/tela-principal-GE.component';
import { CadastrarAlunoComponent } from './cadastrar-aluno/cadastrar-aluno.component';
import { NavBarGEComponent } from './nav-bar-ge/nav-bar-ge.component';
import { LoginService } from './tela-login/login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PesquisarAlunoComponent } from './pesquisar-aluno/pesquisar-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaInicialComponent,
    TelaPrincipalGEComponent,
    CadastrarAlunoComponent,
    NavBarGEComponent,
    PesquisarAlunoComponent
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
    DropdownModule,
    IconFieldModule,
    InputIconModule,
    AvatarModule,
    AvatarGroupModule,
    CardModule,
    SidebarModule,
    SplitButtonModule,
    ToastModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: TelaInicialComponent},
      {path: 'tela-login', component: TelaLoginComponent},
      {path: 'tela-principal-GE', component: TelaPrincipalGEComponent},
      {path: 'cadastrar-aluno', component: CadastrarAlunoComponent},
      {path: 'pesquisar-aluno', component: PesquisarAlunoComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }