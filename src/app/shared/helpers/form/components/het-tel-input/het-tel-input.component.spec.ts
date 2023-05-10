import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "@app/app.module";
import {HetTelInputComponent} from "@shared/helpers/form/components/het-tel-input/het-tel-input.component";

describe('HetTelInputComponent', () => {
    let component: HetTelInputComponent;
    let fixture: ComponentFixture<HetTelInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            declarations: [HetTelInputComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HetTelInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(HetTelInputComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
