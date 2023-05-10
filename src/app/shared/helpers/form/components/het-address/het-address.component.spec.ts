import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HetAddressComponent } from './het-address.component';
import {AppModule} from "../../../../../app.module";
import {SharedModule} from "../../../../shared.module";

import {imports} from "@test/imports";
describe('HetAutocompleteComponent', () => {
  let component: HetAddressComponent;
  let fixture: ComponentFixture<HetAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ HetAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
