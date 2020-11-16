import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScCounterComponent } from './sc-counter.component';

describe('ScCounterComponent', () => {
  let component: ScCounterComponent;
  let fixture: ComponentFixture<ScCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
