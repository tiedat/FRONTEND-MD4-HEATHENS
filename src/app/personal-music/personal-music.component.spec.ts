import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalMusicComponent } from './personal-music.component';

describe('PersonalMusicComponent', () => {
  let component: PersonalMusicComponent;
  let fixture: ComponentFixture<PersonalMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
