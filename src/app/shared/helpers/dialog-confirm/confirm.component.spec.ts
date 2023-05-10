import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  SubstationFormComponent
} from "@app/modules/reference/technical-directories/substation/actions/substation.form/substation.form.component";
import {ConfirmComponent} from "./confirm.component";
import {imports} from "@test/imports";

import {login} from "@test/login";
describe('ConfirmComponent', () => {
  let component: ConfirmComponent;
  let fixture: ComponentFixture<ConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmComponent, SubstationFormComponent],
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
    fixture = TestBed.createComponent(ConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
