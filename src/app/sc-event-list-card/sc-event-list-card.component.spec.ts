import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScEventListCardComponent } from './sc-event-list-card.component';

describe('ScEventListCardComponent', () => {
  let component: ScEventListCardComponent;
  let fixture: ComponentFixture<ScEventListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScEventListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScEventListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
