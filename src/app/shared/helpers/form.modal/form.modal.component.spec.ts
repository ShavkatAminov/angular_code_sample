import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalComponent } from './form.modal.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  SubstationFormComponent
} from "../../../modules/reference/technical-directories/substation/actions/substation.form/substation.form.component";
import {imports} from "@test/imports";

import {login} from "@test/login";
describe('FormModalComponent', () => {
  let component: FormModalComponent;
  let fixture: ComponentFixture<FormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormModalComponent, SubstationFormComponent],
      imports: imports,
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {component: SubstationFormComponent, title: 'Title'},
        },
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(FormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
