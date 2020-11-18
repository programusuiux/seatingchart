import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScModalsComponent } from './sc-modals.component';

describe('ScModalsComponent', () => {
  let component: ScModalsComponent;
  let fixture: ComponentFixture<ScModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
