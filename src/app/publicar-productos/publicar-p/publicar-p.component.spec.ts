import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarPComponent } from './publicar-p.component';

describe('PublicarPComponent', () => {
  let component: PublicarPComponent;
  let fixture: ComponentFixture<PublicarPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicarPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
