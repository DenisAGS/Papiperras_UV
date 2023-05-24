import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosRetiroComponent } from './datos-retiro.component';

describe('DatosRetiroComponent', () => {
  let component: DatosRetiroComponent;
  let fixture: ComponentFixture<DatosRetiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosRetiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
