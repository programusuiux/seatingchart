import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScEventListComponent } from './sc-event-list.component';

describe('ScEventListComponent', () => {
  let component: ScEventListComponent;
  let fixture: ComponentFixture<ScEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
