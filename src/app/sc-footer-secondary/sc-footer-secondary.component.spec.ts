import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScFooterSecondaryComponent } from './sc-footer-secondary.component';

describe('ScFooterSecondaryComponent', () => {
  let component: ScFooterSecondaryComponent;
  let fixture: ComponentFixture<ScFooterSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScFooterSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScFooterSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
