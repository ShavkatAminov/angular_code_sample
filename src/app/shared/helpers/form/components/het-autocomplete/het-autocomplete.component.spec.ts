import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HetAutocompleteComponent } from './het-autocomplete.component';
import {AppModule} from "../../../../../app.module";
import {SharedModule} from "../../../../shared.module";
import {ReferenceDropDownRequest} from "../../../../../modules/reference/basic/ReferenceDropDownRequest";
import {ReferenceApiUrls} from "../../../../../modules/reference/referenceApiUrls";

describe('HetAutocompleteComponent', () => {
  let component: HetAutocompleteComponent;
  let fixture: ComponentFixture<HetAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
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
