/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TelaPrincipalGEComponent } from './tela-principal-GE.component';

describe('TelaPrincipalGEComponent', () => {
  let component: TelaPrincipalGEComponent;
  let fixture: ComponentFixture<TelaPrincipalGEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaPrincipalGEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPrincipalGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
