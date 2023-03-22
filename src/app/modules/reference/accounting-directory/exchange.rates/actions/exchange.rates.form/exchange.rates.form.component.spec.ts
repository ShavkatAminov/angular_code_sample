import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from "app/shared/shared.module";
import {AppModule} from "app/app.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {By} from "@angular/platform-browser";
import {HetButtonComponent} from "app/shared/helpers/form/components/het-button/het-button.component";
import {HetInputComponent} from "app/shared/helpers/form/components/het-input/het-input.component";
import {HetRadioStaticComponent} from "app/shared/helpers/form/components/het-radio-static/het-radio-static.component";
import {
    HetAutocompleteComponent
} from "../../../../../../shared/helpers/form/components/het-autocomplete/het-autocomplete.component";
import {ExchangeRatesFormComponent} from './exchange.rates.form.component';

describe('ExchangeRateGuideFormComponent', () => {
    let component: ExchangeRatesFormComponent;
    let fixture: ComponentFixture<ExchangeRatesFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ExchangeRatesFormComponent,
                HetButtonComponent,
                HetInputComponent,
                HetRadioStaticComponent,
                HetAutocompleteComponent
            ],
            imports: [
                ReactiveFormsModule,
                HttpClientTestingModule,
                SharedModule,
                AppModule,
            ],
        })
            .compileComponents();

        fixture = TestBed.createComponent(ExchangeRatesFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have a form with form controls", () => {
        expect(component.form.get("currencyId")).toBeTruthy();
        expect(component.form.get("exchangeRate")).toBeTruthy();
        expect(component.form.get("currencyUnit")).toBeTruthy();
        expect(component.form.get("activationDate")).toBeTruthy();
        expect(component.form.get("status")).toBeTruthy();
    });


    it("should call the saveProcess method on form submission", () => {
        spyOn(component, "saveProcess");
        component.form.controls["currencyId"].setValue(1);
        component.form.controls["exchangeRate"].setValue(222);
        component.form.controls["currencyUnit"].setValue(222);
        component.form.controls["activationDate"].setValue(new Date());
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
