import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalComponent} from './modal.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {InjectorInstance, SharedModule} from "../../shared.module";
import {Observable} from "rxjs";
import {WidgetsComponent} from "../../../modules/het/home/widgets/widgets.component";
import {AppModule} from "../../../app.module";
import {MatIconModule} from "@angular/material/icon";

describe('ModalComponent', () => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalComponent, WidgetsComponent],
            imports: [
                AppModule,
                MatIconModule,
                SharedModule,
            ],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {component: WidgetsComponent, title: 'Title'},
                },
                {
                    provide: MatDialogRef,
                    useValue: {},
                },
            ]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('Calling setSize', () => {
        let spyClass = spyOn(ModalComponent, "setSize")
            .withArgs("xsm").and.returnValue("40%");
        ModalComponent.setSize("xsm")
        expect(ModalComponent.setSize).toHaveBeenCalled();
        expect(ModalComponent.setSize).toHaveBeenCalledWith("xsm");
        expect(ModalComponent.setSize("xsm")).toEqual("40%");
    })
    it('Calling showModal', () => {
        let spyClass = spyOn(ModalComponent, "showModal")
            .withArgs(WidgetsComponent, "This is title").and.returnValue(new Observable());
        ModalComponent.showModal(WidgetsComponent, "This is title")
        expect(ModalComponent.showModal).toHaveBeenCalled();
        expect(ModalComponent.showModal).toHaveBeenCalledWith(WidgetsComponent, "This is title");
        expect(ModalComponent.showModal(WidgetsComponent, "This is title")).toEqual(new Observable());
    })
});
