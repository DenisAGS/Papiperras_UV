import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfertasComponent } from './list-ofertas.component';

describe('ListOfertasComponent', () => {
  let component: ListOfertasComponent;
  let fixture: ComponentFixture<ListOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
