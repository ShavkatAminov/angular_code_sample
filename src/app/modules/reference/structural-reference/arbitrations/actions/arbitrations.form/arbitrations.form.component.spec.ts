import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArbitrationsFormComponent } from './arbitrations.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('ArbitrationsFormComponent', () => {
    let component: ArbitrationsFormComponent;
    let fixture: ComponentFixture<ArbitrationsFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppModule,
                SharedModule,
            ],
            declarations: [ ArbitrationsFormComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ArbitrationsFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
