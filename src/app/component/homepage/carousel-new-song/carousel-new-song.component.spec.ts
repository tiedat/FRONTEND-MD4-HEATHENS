import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNewSongComponent } from './carousel-new-song.component';

describe('CarouselNewSongComponent', () => {
  let component: CarouselNewSongComponent;
  let fixture: ComponentFixture<CarouselNewSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselNewSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselNewSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
