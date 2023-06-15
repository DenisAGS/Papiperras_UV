import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestpaswordComponent } from './requestpasword.component';

describe('RequestpaswordComponent', () => {
  let component: RequestpaswordComponent;
  let fixture: ComponentFixture<RequestpaswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestpaswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestpaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
