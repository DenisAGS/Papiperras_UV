import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionimgComponent } from './facturacionimg.component';

describe('FacturacionimgComponent', () => {
  let component: FacturacionimgComponent;
  let fixture: ComponentFixture<FacturacionimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturacionimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturacionimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
