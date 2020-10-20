import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScEventCategoryListComponent } from './sc-event-category-list.component';

describe('ScEventCategoryListComponent', () => {
  let component: ScEventCategoryListComponent;
  let fixture: ComponentFixture<ScEventCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScEventCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScEventCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
