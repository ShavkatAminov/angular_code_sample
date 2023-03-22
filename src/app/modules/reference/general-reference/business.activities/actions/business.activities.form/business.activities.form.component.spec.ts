import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessActivitiesFormComponent } from './business.activities.form.component';

describe('BusinessActivitiesFormComponent', () => {
  let component: BusinessActivitiesFormComponent;
  let fixture: ComponentFixture<BusinessActivitiesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessActivitiesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessActivitiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
