import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgroupGovernmentOrganizationFormComponent } from './subgroup.government.organization.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('SubgroupGovernmentOrganizationFormComponent', () => {
  let component: SubgroupGovernmentOrganizationFormComponent;
  let fixture: ComponentFixture<SubgroupGovernmentOrganizationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedModule,
      ],
      declarations: [ SubgroupGovernmentOrganizationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubgroupGovernmentOrganizationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
