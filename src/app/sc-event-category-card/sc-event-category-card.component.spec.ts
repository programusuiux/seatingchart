import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScEventCategoryCardComponent } from './sc-event-category-card.component';

describe('ScEventCategoryCardComponent', () => {
  let component: ScEventCategoryCardComponent;
  let fixture: ComponentFixture<ScEventCategoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScEventCategoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScEventCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
