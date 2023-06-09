import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemasProductosComponent } from './problemas-productos.component';

describe('ProblemasProductosComponent', () => {
  let component: ProblemasProductosComponent;
  let fixture: ComponentFixture<ProblemasProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemasProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemasProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
