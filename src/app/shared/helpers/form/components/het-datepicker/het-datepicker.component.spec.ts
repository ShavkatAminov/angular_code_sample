import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from "../../../../shared.module";
import {AppModule} from "../../../../../app.module";

import {HetDatepickerComponent} from './het-datepicker.component';

describe('HetDatepickerComponent', () => {
    let component: HetDatepickerComponent;
    let fixture: ComponentFixture<HetDatepickerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppModule,
                SharedModule
            ],
            declarations: [HetDatepickerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(HetDatepickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(HetDatepickerComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should return computed classes', () => {
        component.color = 'amber';
        component.showError = true;
        let computedClasses = component.computedClasses();
        expect(computedClasses).toEqual({
            'error': true,
            'amber': true,
            'datepicker-readonly': true,
        });
    });
});
