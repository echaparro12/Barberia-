import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaradministradorComponent } from './navbaradministrador.component';

describe('NavbaradministradorComponent', () => {
  let component: NavbaradministradorComponent;
  let fixture: ComponentFixture<NavbaradministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaradministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbaradministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
