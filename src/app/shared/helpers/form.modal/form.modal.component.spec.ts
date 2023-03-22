import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalComponent } from './form.modal.component';
import {ModalComponent} from "../modal/modal.component";
import {WidgetsComponent} from "../../../modules/het/home/widgets/widgets.component";
import {Observable} from "rxjs";
import {AppModule} from "../../../app.module";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../shared.module";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  SubstationFormComponent
} from "../../../modules/reference/technical-directories/substation/actions/substation.form/substation.form.component";

describe('FormModalComponent', () => {
  let component: FormModalComponent;
  let fixture: ComponentFixture<FormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormModalComponent, SubstationFormComponent],
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

    fixture = TestBed.createComponent(FormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Calling setSize', () => {
    let spyClass = spyOn(FormModalComponent, "setSize")
        .withArgs("xsm").and.returnValue("40%");
    FormModalComponent.setSize("xsm")
    expect(FormModalComponent.setSize).toHaveBeenCalled();
    expect(FormModalComponent.setSize).toHaveBeenCalledWith("xsm");
    expect(FormModalComponent.setSize("xsm")).toEqual("40%");
  })
  it('Calling showModal', () => {
    let spyClass = spyOn(FormModalComponent, "showModal")
        .withArgs(SubstationFormComponent, "This is title").and.returnValue(new Observable());
    FormModalComponent.showModal(SubstationFormComponent, "This is title")
    expect(FormModalComponent.showModal).toHaveBeenCalled();
    expect(FormModalComponent.showModal).toHaveBeenCalledWith(SubstationFormComponent, "This is title");
    expect(FormModalComponent.showModal(SubstationFormComponent, "This is title")).toEqual(new Observable());
  })
});
