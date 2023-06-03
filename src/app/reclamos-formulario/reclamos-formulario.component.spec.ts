import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamosFormularioComponent } from './reclamos-formulario.component';

describe('ReclamosFormularioComponent', () => {
  let component: ReclamosFormularioComponent;
  let fixture: ComponentFixture<ReclamosFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamosFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
