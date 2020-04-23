import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAllPlaylistComponent } from './my-all-playlist.component';

describe('MyAllPlaylistComponent', () => {
  let component: MyAllPlaylistComponent;
  let fixture: ComponentFixture<MyAllPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAllPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAllPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
