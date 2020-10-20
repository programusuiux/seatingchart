import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScOwlCarouselComponent } from './sc-owl-carousel.component';

describe('ScOwlCarouselComponent', () => {
  let component: ScOwlCarouselComponent;
  let fixture: ComponentFixture<ScOwlCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScOwlCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScOwlCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
