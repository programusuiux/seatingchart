import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScPackageCardComponent } from './sc-package-card.component';

describe('ScPackageCardComponent', () => {
  let component: ScPackageCardComponent;
  let fixture: ComponentFixture<ScPackageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScPackageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScPackageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
