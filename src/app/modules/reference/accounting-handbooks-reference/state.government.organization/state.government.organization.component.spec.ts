import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateGovernmentOrganizationComponent } from './state.government.organization.component';
import {SharedModule} from "../../../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {TranslocoModule} from "@ngneat/transloco";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
describe('StateGovernmentOrganizationsComponent', () => {
  let component: StateGovernmentOrganizationComponent;
  let fixture: ComponentFixture<StateGovernmentOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ StateGovernmentOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateGovernmentOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
