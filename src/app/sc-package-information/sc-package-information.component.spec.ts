import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScPackageInformationComponent } from './sc-package-information.component';

describe('ScPackageInformationComponent', () => {
  let component: ScPackageInformationComponent;
  let fixture: ComponentFixture<ScPackageInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScPackageInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScPackageInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
