import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from "app/shared/shared.module";
import {AppModule} from "app/app.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {By} from "@angular/platform-browser";
import {HetButtonComponent} from "app/shared/helpers/form/components/het-button/het-button.component";
import {HetInputComponent} from "app/shared/helpers/form/components/het-input/het-input.component";
import {HetRadioStaticComponent} from "app/shared/helpers/form/components/het-radio-static/het-radio-static.component";
import {ProviderTypeFormComponent} from './provider.type.form.component';


import {imports} from "@test/imports";
import {login} from "@test/login";
describe('ProviderTypeFormComponent', () => {
    let component: ProviderTypeFormComponent;
    let fixture: ComponentFixture<ProviderTypeFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: imports,
            declarations: [
                ProviderTypeFormComponent,
                HetButtonComponent,
                HetInputComponent,
                HetRadioStaticComponent,
            ]
        }).compileComponents();
    login();

        fixture = TestBed.createComponent(ProviderTypeFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have a form with form controls", () => {
        expect(component.form.get("nameUz")).toBeTruthy();
        expect(component.form.get("url")).toBeTruthy();
        expect(component.form.get("status")).toBeTruthy();
    });

    it("should call the saveProcess method on form submission", () => {
        spyOn(component, "saveProcess");
        component.form.controls["nameUz"].setValue("test");
        component.form.controls["url"].setValue("test");
        component.form.controls["status"].setValue(true);
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
