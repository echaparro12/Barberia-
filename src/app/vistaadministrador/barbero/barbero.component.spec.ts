import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberoComponent } from './barbero.component';

describe('BarberoComponent', () => {
  let component: BarberoComponent;
  let fixture: ComponentFixture<BarberoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarberoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
