import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScPackageTicketingCardComponent } from './sc-package-ticketing-card.component';

describe('ScPackageTicketingCardComponent', () => {
  let component: ScPackageTicketingCardComponent;
  let fixture: ComponentFixture<ScPackageTicketingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScPackageTicketingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScPackageTicketingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
