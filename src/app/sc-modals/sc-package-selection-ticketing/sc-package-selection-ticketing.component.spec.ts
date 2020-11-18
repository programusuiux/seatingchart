import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScPackageSelectionTicketingComponent } from './sc-package-selection-ticketing.component';

describe('ScPackageSelectionTicketingComponent', () => {
  let component: ScPackageSelectionTicketingComponent;
  let fixture: ComponentFixture<ScPackageSelectionTicketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScPackageSelectionTicketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScPackageSelectionTicketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
