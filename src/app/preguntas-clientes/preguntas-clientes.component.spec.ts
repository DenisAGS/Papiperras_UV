import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasClientesComponent } from './preguntas-clientes.component';

describe('PreguntasClientesComponent', () => {
  let component: PreguntasClientesComponent;
  let fixture: ComponentFixture<PreguntasClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
