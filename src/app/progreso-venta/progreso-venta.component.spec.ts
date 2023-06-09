import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresoVentaComponent } from './progreso-venta.component';

describe('ProgresoVentaComponent', () => {
  let component: ProgresoVentaComponent;
  let fixture: ComponentFixture<ProgresoVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgresoVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgresoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
