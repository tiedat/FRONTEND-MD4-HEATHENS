import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostListenSongComponent } from './most-listen-song.component';

describe('MostListenSongComponent', () => {
  let component: MostListenSongComponent;
  let fixture: ComponentFixture<MostListenSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostListenSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostListenSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
