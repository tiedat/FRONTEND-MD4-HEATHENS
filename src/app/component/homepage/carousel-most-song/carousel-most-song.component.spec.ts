import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMostSongComponent } from './carousel-most-song.component';

describe('CarouselMostSongComponent', () => {
  let component: CarouselMostSongComponent;
  let fixture: ComponentFixture<CarouselMostSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselMostSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMostSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
