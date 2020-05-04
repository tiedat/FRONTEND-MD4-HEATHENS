import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselBannerComponent } from './carosel-banner.component';

describe('CaroselBannerComponent', () => {
  let component: CaroselBannerComponent;
  let fixture: ComponentFixture<CaroselBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaroselBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaroselBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
