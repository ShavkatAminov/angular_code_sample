import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagementPositionsFormComponent } from './management.positions.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('ManagementPositionsFormComponent', () => {
    let component: ManagementPositionsFormComponent;
    let fixture: ComponentFixture<ManagementPositionsFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: imports,
            declarations: [ ManagementPositionsFormComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ManagementPositionsFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
