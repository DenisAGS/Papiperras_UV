import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutUsComponent } from './page-about-us.component';

describe('PageAboutUsComponent', () => {
  let component: PageAboutUsComponent;
  let fixture: ComponentFixture<PageAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
