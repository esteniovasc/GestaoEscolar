import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarAlunoComponent } from './pesquisar-aluno.component';

describe('PesquisarAlunoComponent', () => {
  let component: PesquisarAlunoComponent;
  let fixture: ComponentFixture<PesquisarAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PesquisarAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PesquisarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
