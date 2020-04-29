import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongHistoryComponent } from './song-history.component';

describe('SongHistoryComponent', () => {
  let component: SongHistoryComponent;
  let fixture: ComponentFixture<SongHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
