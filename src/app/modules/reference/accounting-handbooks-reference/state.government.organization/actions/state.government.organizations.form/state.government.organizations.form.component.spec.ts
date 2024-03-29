import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateGovernmentOrganizationsFormComponent } from './state.government.organizations.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('StateGovernmentOrganizationsFormComponent', () => {
  let component: StateGovernmentOrganizationsFormComponent;
  let fixture: ComponentFixture<StateGovernmentOrganizationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ StateGovernmentOrganizationsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateGovernmentOrganizationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
