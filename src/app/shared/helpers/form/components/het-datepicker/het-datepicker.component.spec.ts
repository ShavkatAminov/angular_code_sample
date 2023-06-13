import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HetDatepickerComponent} from './het-datepicker.component';

import {imports} from "@test/imports";
import {login} from "@test/login";

describe('HetDatepickerComponent', () => {
    let component: HetDatepickerComponent;
    let fixture: ComponentFixture<HetDatepickerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: imports,
            declarations: [HetDatepickerComponent],
        }).compileComponents();
        login();

        fixture = TestBed.createComponent(HetDatepickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
