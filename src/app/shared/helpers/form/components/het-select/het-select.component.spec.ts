import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from "../../../../shared.module";
import {AppModule} from "../../../../../app.module";


import {HetSelectComponent} from "./het-select.component";


import {imports} from "@test/imports";
import {login} from "@test/login";
describe('HetSelectComponent', () => {
    let component: HetSelectComponent;
    let fixture: ComponentFixture<HetSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: imports,
            declarations: [HetSelectComponent]
        }).compileComponents();
    login();

        fixture = TestBed.createComponent(HetSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(HetSelectComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should return computed classes', () => {
        component.color = 'amber';
        component.showError = true;
        let computedClasses = component.computedClasses();
        expect(computedClasses).toEqual({
            'error': true,
            'amber': true
        });
    });
});
