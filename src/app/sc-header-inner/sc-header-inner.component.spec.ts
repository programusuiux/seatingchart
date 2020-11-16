import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScHeaderInnerComponent } from './sc-header-inner.component';

describe('ScHeaderInnerComponent', () => {
  let component: ScHeaderInnerComponent;
  let fixture: ComponentFixture<ScHeaderInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScHeaderInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScHeaderInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
