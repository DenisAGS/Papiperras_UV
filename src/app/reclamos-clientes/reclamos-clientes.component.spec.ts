import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamosClientesComponent } from './reclamos-clientes.component';

describe('ReclamosClientesComponent', () => {
  let component: ReclamosClientesComponent;
  let fixture: ComponentFixture<ReclamosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamosClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
