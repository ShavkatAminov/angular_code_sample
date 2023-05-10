import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessActivitiesComponent } from './business.activities.component';

import {AppModule} from "@app/app.module";
import {SharedModule} from "@shared/shared.module";
import {imports} from "@test/imports";
import {login} from "@test/login";
describe('BusinessActivitiesComponent', () => {
  let component: BusinessActivitiesComponent;
  let fixture: ComponentFixture<BusinessActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ BusinessActivitiesComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(BusinessActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
