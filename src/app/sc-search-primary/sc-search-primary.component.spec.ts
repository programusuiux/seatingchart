import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScSearchPrimaryComponent } from './sc-search-primary.component';

describe('ScSearchPrimaryComponent', () => {
  let component: ScSearchPrimaryComponent;
  let fixture: ComponentFixture<ScSearchPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScSearchPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScSearchPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
