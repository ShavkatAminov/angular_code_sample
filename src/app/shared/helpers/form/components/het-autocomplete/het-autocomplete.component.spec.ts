import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HetAutocompleteComponent } from './het-autocomplete.component';
import {AppModule} from "@app/app.module";
import {SharedModule} from "@shared/shared.module";
import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";
import {ReferenceApiUrls} from "@app/modules/reference/referenceApiUrls";

import {imports} from "@test/imports";
describe('HetAutocompleteComponent', () => {
  let component: HetAutocompleteComponent;
  let fixture: ComponentFixture<HetAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ HetAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetAutocompleteComponent);
    component = fixture.componentInstance;
    component.request = new ReferenceDropDownRequest(ReferenceApiUrls.METER_TYPE)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
