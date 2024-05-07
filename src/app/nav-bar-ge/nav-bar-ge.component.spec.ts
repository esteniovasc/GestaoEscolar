import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarGEComponent } from './nav-bar-ge.component';

describe('NavBarGEComponent', () => {
  let component: NavBarGEComponent;
  let fixture: ComponentFixture<NavBarGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarGEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
