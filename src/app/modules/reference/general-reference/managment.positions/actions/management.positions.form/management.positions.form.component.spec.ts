import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagementPositionsFormComponent } from './management.positions.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('ManagementPositionsFormComponent', () => {
    let component: ManagementPositionsFormComponent;
    let fixture: ComponentFixture<ManagementPositionsFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppModule,
                SharedModule,
            ],
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
