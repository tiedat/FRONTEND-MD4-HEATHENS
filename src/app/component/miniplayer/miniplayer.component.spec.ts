import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniplayerComponent } from './miniplayer.component';

describe('MiniplayerComponent', () => {
  let component: MiniplayerComponent;
  let fixture: ComponentFixture<MiniplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
