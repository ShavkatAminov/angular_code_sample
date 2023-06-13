import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HetInputComponent} from './het-input.component';
import {imports} from "@test/imports";
import { login } from '@test/login';

describe('HetInputComponent', () => {
    let component: HetInputComponent;
    let fixture: ComponentFixture<HetInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: imports,
            declarations: [HetInputComponent]
        }).compileComponents();
        login();
        fixture = TestBed.createComponent(HetInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(HetInputComponent);
        const component = fixture.componentInstance;
        // @ts-ignore
        expect(component).toBeTruthy();
    });
});
