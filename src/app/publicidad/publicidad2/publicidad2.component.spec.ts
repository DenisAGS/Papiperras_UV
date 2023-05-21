import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publicidad2Component } from './publicidad2.component';

describe('Publicidad2Component', () => {
  let component: Publicidad2Component;
  let fixture: ComponentFixture<Publicidad2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Publicidad2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publicidad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
