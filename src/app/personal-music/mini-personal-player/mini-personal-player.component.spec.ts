import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPersonalPlayerComponent } from './mini-personal-player.component';

describe('MiniPersonalPlayerComponent', () => {
  let component: MiniPersonalPlayerComponent;
  let fixture: ComponentFixture<MiniPersonalPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniPersonalPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniPersonalPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
