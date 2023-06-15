import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidpaswordComponent } from './validpasword.component';

describe('ValidpaswordComponent', () => {
  let component: ValidpaswordComponent;
  let fixture: ComponentFixture<ValidpaswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidpaswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidpaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
