import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HetDatepickerRange} from './het-datepicker-range';

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('HetDatepickerRange', () => {
    let component: HetDatepickerRange;
    let fixture: ComponentFixture<HetDatepickerRange>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: imports,
            declarations: [HetDatepickerRange],
        }).compileComponents();
    login();

        fixture = TestBed.createComponent(HetDatepickerRange);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
