import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasPreguntasComponent } from './respuestas-preguntas.component';

describe('RespuestasPreguntasComponent', () => {
  let component: RespuestasPreguntasComponent;
  let fixture: ComponentFixture<RespuestasPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
