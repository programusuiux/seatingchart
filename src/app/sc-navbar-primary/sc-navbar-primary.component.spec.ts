import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScNavbarPrimaryComponent } from './sc-navbar-primary.component';

describe('ScNavbarPrimaryComponent', () => {
  let component: ScNavbarPrimaryComponent;
  let fixture: ComponentFixture<ScNavbarPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScNavbarPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScNavbarPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
