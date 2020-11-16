import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScSearchSecondaryComponent } from './sc-search-secondary.component';

describe('ScSearchSecondaryComponent', () => {
  let component: ScSearchSecondaryComponent;
  let fixture: ComponentFixture<ScSearchSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScSearchSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScSearchSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
