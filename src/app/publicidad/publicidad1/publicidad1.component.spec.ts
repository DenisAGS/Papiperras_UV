import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publicidad1Component } from './publicidad1.component';

describe('Publicidad1Component', () => {
  let component: Publicidad1Component;
  let fixture: ComponentFixture<Publicidad1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Publicidad1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publicidad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
