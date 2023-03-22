import { ComponentFixture, TestBed } from '@angular/core/testing';

import {Observable} from "rxjs";
import {AppModule} from "../../../app.module";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../shared.module";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  SubstationFormComponent
} from "../../../modules/reference/technical-directories/substation/actions/substation.form/substation.form.component";
import {ConfirmComponent} from "./confirm.component";

describe('ConfirmComponent', () => {
  let component: ConfirmComponent;
  let fixture: ComponentFixture<ConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmComponent, SubstationFormComponent],
      imports: [
        AppModule,
        MatIconModule,
        SharedModule,
      ],
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
    fixture = TestBed.createComponent(ConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
