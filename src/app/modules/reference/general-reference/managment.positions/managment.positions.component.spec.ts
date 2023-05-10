import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagmentPositionsComponent } from './managment.positions.component';
import {SharedModule} from "@shared/shared.module";
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('ManagementPositionsComponent', () => {
    let component: ManagmentPositionsComponent;
    let fixture: ComponentFixture<ManagmentPositionsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: imports,
            declarations: [ ManagmentPositionsComponent ]
        })
            .compileComponents();
    login();

        fixture = TestBed.createComponent(ManagmentPositionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
