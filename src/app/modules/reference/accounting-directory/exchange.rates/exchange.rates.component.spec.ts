import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppModule} from "app/app.module";
import {SharedModule} from "app/shared/shared.module";
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {By} from "@angular/platform-browser";
import {AgGridModule} from "ag-grid-angular";
import {ExchangeRatesFormComponent} from "./actions/exchange.rates.form/exchange.rates.form.component";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {ExchangeRatesComponent} from "./exchange.rates.component";

describe('ExchangeRateGuideComponent', () => {
    let component: ExchangeRatesComponent;
    let fixture: ComponentFixture<ExchangeRatesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExchangeRatesComponent, ExchangeRatesFormComponent],
            imports: [
                HttpClientTestingModule,
                AgGridModule,
                AppModule,
                SharedModule,
                TranslocoModule,
            ],
            providers: [FormModalComponent],
        })
            .compileComponents();

        fixture = TestBed.createComponent(ExchangeRatesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    beforeEach( () => {
        fixture = TestBed.createComponent(ExchangeRatesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should have a grid with column definitions", () => {
        const grid = fixture.debugElement.query(By.css("ag-grid-angular"));
        expect(grid).toBeTruthy();
        expect(component.columnDefs.length).toBeGreaterThan(0);
    });

    it("should have a title", () => {
        expect(component.title).toBeDefined();
    });

    it("should have a request", () => {
        expect(component.request).toBeDefined();
    });

    it("should have a addUpdate method", () => {
        expect(component.addUpdate).toBeDefined();
    });

    it("should open modal when addUpdate method is called", () => {
        spyOn(FormModalComponent, "showModal").and.callThrough();
        component.addUpdate();
        expect(FormModalComponent.showModal).toHaveBeenCalled();
    });
});
