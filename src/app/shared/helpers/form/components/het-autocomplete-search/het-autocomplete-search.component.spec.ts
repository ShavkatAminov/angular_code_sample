import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HetAutocompleteSearchComponent } from './het-autocomplete-search.component';
import {AppModule} from "@app/app.module";
import {SharedModule} from "@shared/shared.module";
import {ReferenceDropDownRequest} from "@app/modules/reference/basic/ReferenceDropDownRequest";
import {ReferenceApiUrls} from "@app/modules/reference/referenceApiUrls";

import {imports} from "@test/imports";
describe('HetAutocompleteComponent', () => {
  let component: HetAutocompleteSearchComponent;
  let fixture: ComponentFixture<HetAutocompleteSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ HetAutocompleteSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetAutocompleteSearchComponent);
    component = fixture.componentInstance;
    component.request = new ReferenceDropDownRequest(ReferenceApiUrls.METER_TYPE)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
