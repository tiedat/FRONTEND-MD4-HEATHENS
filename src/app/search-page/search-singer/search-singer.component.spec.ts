import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSingerComponent } from './search-singer.component';

describe('SearchSingerComponent', () => {
  let component: SearchSingerComponent;
  let fixture: ComponentFixture<SearchSingerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSingerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
