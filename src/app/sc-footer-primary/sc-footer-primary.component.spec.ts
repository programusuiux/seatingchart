import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScFooterPrimaryComponent } from './sc-footer-primary.component';

describe('ScFooterPrimaryComponent', () => {
  let component: ScFooterPrimaryComponent;
  let fixture: ComponentFixture<ScFooterPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScFooterPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScFooterPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
