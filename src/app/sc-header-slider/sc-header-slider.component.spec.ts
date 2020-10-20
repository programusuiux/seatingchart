import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScHeaderSliderComponent } from './sc-header-slider.component';

describe('ScHeaderSliderComponent', () => {
  let component: ScHeaderSliderComponent;
  let fixture: ComponentFixture<ScHeaderSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScHeaderSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScHeaderSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
