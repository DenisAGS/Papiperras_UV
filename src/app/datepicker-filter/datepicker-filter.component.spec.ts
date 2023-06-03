import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerFilterComponent } from './datepicker-filter.component';

describe('DatepickerFilterComponent', () => {
  let component: DatepickerFilterComponent;
  let fixture: ComponentFixture<DatepickerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
