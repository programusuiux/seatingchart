import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScViewallCardComponent } from './sc-viewall-card.component';

describe('ScViewallCardComponent', () => {
  let component: ScViewallCardComponent;
  let fixture: ComponentFixture<ScViewallCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScViewallCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScViewallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
