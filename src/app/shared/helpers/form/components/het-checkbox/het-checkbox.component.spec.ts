import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {HetCheckboxComponent} from './het-checkbox.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AppModule} from "../../../../../app.module";
import {SharedModule} from "../../../../shared.module";

describe('HetCheckboxComponent', () => {
    let component: HetCheckboxComponent;
    let fixture: ComponentFixture<HetCheckboxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MatCheckboxModule, AppModule, SharedModule],
            declarations: [HetCheckboxComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HetCheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(HetCheckboxComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should checkboxChanged emit on change', waitForAsync(() => {
        spyOn(component.checkboxChanged, 'emit');

        fixture.detectChanges();
        const nativeElement = fixture.nativeElement;
        const matCheckbox = nativeElement.querySelector('input[type=checkbox]');
        matCheckbox.checked = true;

        matCheckbox.dispatchEvent(new Event('click'));


        expect(component.checkboxChanged.emit).toHaveBeenCalledWith(true);
    }));
    it('should not checkboxChanged emit on change', waitForAsync(() => {

        component.disabled = true;
        spyOn(component.checkboxChanged, 'emit');
        const nativeElement = fixture.nativeElement;
        const matCheckbox = nativeElement.querySelector('input[type=checkbox]');
        matCheckbox.checked = true;
        matCheckbox.dispatchEvent(new Event('click'));
        fixture.detectChanges();

        expect(component.checkboxChanged.emit).not.toHaveBeenCalledWith();
    }));
});
