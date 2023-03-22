import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from "../../../../shared.module";
import {AppModule} from "../../../../../app.module";
import {HetInputComponent} from './het-input.component';

describe('HetInputComponent', () => {
    let component: HetInputComponent;
    let fixture: ComponentFixture<HetInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SharedModule, AppModule],
            declarations: [HetInputComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HetInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(HetInputComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
