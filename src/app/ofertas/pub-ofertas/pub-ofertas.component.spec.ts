import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubOfertasComponent } from './pub-ofertas.component';

describe('PubOfertasComponent', () => {
  let component: PubOfertasComponent;
  let fixture: ComponentFixture<PubOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubOfertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
