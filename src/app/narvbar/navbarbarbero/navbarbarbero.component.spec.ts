import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarbarberoComponent } from './navbarbarbero.component';

describe('NavbarbarberoComponent', () => {
  let component: NavbarbarberoComponent;
  let fixture: ComponentFixture<NavbarbarberoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarbarberoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarbarberoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
