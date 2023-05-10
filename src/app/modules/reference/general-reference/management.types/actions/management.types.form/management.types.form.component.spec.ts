import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTypesFormComponent } from './management.types.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('ManagementTypesFormComponent', () => {
  let component: ManagementTypesFormComponent;
  let fixture: ComponentFixture<ManagementTypesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ ManagementTypesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
