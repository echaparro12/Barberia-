import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasUComponent } from './citas-u.component';

describe('CitasUComponent', () => {
  let component: CitasUComponent;
  let fixture: ComponentFixture<CitasUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
