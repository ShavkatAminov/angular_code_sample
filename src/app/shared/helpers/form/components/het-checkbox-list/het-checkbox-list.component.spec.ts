import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HetCheckboxListComponent } from './het-checkbox-list.component';
import {AppModule} from "@app/app.module";
import {SharedModule} from "@shared/shared.module";
import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";
import {ReferenceApiUrls} from "@app/modules/reference/referenceApiUrls";

import {imports} from "@test/imports";
describe('HetCheckboxListComponent', () => {
  let component: HetCheckboxListComponent;
  let fixture: ComponentFixture<HetCheckboxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ HetCheckboxListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetCheckboxListComponent);
    component = fixture.componentInstance;
    component.request = new ReferenceDropDownRequest(ReferenceApiUrls.METER_TYPE)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
