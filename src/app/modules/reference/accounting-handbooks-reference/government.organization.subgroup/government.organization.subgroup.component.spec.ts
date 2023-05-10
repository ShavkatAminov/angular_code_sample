import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentOrganizationSubgroupComponent } from './government.organization.subgroup.component';
import {SharedModule} from "../../../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {TranslocoModule} from "@ngneat/transloco";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
describe('SubgroupGovernmentOrganizationComponent', () => {
  let component: GovernmentOrganizationSubgroupComponent;
  let fixture: ComponentFixture<GovernmentOrganizationSubgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ GovernmentOrganizationSubgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentOrganizationSubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
