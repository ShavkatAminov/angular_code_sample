import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AppModule} from "../../../../../app.module";
import {HetNumberInputComponent} from './het-number-input.component';
import {SharedModule} from "@shared/shared.module";

describe('HetInputComponent', () => {
    let component: HetNumberInputComponent;
    let fixture: ComponentFixture<HetNumberInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            declarations: [HetNumberInputComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HetNumberInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(HetNumberInputComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
