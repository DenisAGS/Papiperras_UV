import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionftComponent } from './facturacionft.component';

describe('FacturacionftComponent', () => {
  let component: FacturacionftComponent;
  let fixture: ComponentFixture<FacturacionftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturacionftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturacionftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
