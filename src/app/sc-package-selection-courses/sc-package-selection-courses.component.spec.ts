import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScPackageSelectionCoursesComponent } from './sc-package-selection-courses.component';

describe('ScPackageSelectionCoursesComponent', () => {
  let component: ScPackageSelectionCoursesComponent;
  let fixture: ComponentFixture<ScPackageSelectionCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScPackageSelectionCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScPackageSelectionCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
