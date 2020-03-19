import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsongComponent } from './uploadsong.component';

describe('UploadsongComponent', () => {
  let component: UploadsongComponent;
  let fixture: ComponentFixture<UploadsongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadsongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
