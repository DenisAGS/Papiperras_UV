import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampañasComponent } from './campañas.component';

describe('CampañasComponent', () => {
  let component: CampañasComponent;
  let fixture: ComponentFixture<CampañasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampañasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampañasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
