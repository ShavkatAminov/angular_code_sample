import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ArbitrationsComponent} from './arbitrations.component';
import {SharedModule} from "../../../../shared/shared.module";
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('ArbitrationsComponent', () => {
    let component: ArbitrationsComponent;
    let fixture: ComponentFixture<ArbitrationsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: imports,
            declarations: [ ArbitrationsComponent ]
        })
            .compileComponents();
    login();

        fixture = TestBed.createComponent(ArbitrationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
