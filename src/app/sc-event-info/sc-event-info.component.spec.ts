import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScEventInfoComponent } from './sc-event-info.component';

describe('ScEventInfoComponent', () => {
  let component: ScEventInfoComponent;
  let fixture: ComponentFixture<ScEventInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScEventInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScEventInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
