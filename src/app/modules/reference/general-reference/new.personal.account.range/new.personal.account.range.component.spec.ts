import { ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from "@shared/shared.module";
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "@app/app.module";
import {NewPersonalAccountRangeComponent} from "@app/modules/reference/general-reference/new.personal.account.range/new.personal.account.range.component";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('NewPersonalAccountRangeComponent', () => {
    let component: NewPersonalAccountRangeComponent;
    let fixture: ComponentFixture<NewPersonalAccountRangeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: imports,
            declarations: [ NewPersonalAccountRangeComponent ]
        })
            .compileComponents();
    login();

        fixture = TestBed.createComponent(NewPersonalAccountRangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
