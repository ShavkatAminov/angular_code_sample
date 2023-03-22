import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HetModalAutocompleteFormComponent } from './het-modal-autocomplete-form.component';
import {AppModule} from "../../../../../../../app.module";
import {SharedModule} from "../../../../../../shared.module";

describe('HetModalAutocompleteFormComponent', () => {
  let component: HetModalAutocompleteFormComponent;
  let fixture: ComponentFixture<HetModalAutocompleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule
      ],
      declarations: [ HetModalAutocompleteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetModalAutocompleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
