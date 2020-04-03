import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAllSongComponent } from './my-all-song.component';

describe('MyAllSongComponent', () => {
  let component: MyAllSongComponent;
  let fixture: ComponentFixture<MyAllSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAllSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAllSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
