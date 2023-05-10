import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from "app/shared/shared.module";
import { AppModule } from "app/app.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { By } from "@angular/platform-browser";
import { HetButtonComponent } from "app/shared/helpers/form/components/het-button/het-button.component";
import { HetInputComponent } from "app/shared/helpers/form/components/het-input/het-input.component";
import { HetRadioStaticComponent } from "app/shared/helpers/form/components/het-radio-static/het-radio-static.component";
import { BanksFormComponent } from './banks.form.component';

import {login} from "@test/login";
describe('BanksDirectoryFormComponent', () => {
  let component: BanksFormComponent;
  let fixture: ComponentFixture<BanksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BanksFormComponent,
        HetButtonComponent,
        HetInputComponent,
        HetRadioStaticComponent,
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        SharedModule,
        AppModule,
      ],
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(BanksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a form with form controls", () => {
    expect(component.form.get("code")).toBeTruthy();
    expect(component.form.get("nameUz")).toBeTruthy();
    expect(component.form.get("status")).toBeTruthy();
    expect(component.form.get("paymentRequirement")).toBeTruthy();
  });

  it("should call the saveProcess method on form submission", () => {
    spyOn(component, "saveProcess");
    component.form.controls["code"].setValue(1);
    component.form.controls["nameUz"].setValue("test");
    component.form.controls["status"].setValue(true);
    component.form.controls["paymentRequirement"].setValue(true);
    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css("form"));
    form.triggerEventHandler("ngSubmit", null);
    expect(component.saveProcess).toHaveBeenCalled();
  });

  it("should call the beforeSave method before save", () => {
    spyOn(component, "beforeSave");
    component.saveProcess();
    expect(component.beforeSave).toHaveBeenCalled();
  });
});
