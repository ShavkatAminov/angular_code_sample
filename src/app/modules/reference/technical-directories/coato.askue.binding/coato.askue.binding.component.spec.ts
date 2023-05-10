import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {SizeModal} from '@shared/helpers/modal/modal.component';
import {ReferenceListRequest} from '../../basic/ReferenceListRequest';
import {ReferenceApiUrls} from '../../referenceApiUrls';
import {CoatoAskueBindingComponent} from './coato.askue.binding.component';
import {CoatoAskueBindingFormComponent} from "./actions/coato.askue.binding.form/coato.askue.binding.form.component";
import {AppModule} from "@app/app.module";
import {SharedModule} from "@shared/shared.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AgGridModule} from "ag-grid-angular";
import {TranslocoModule} from "@ngneat/transloco";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('CoatoAskueBindingComponent', () => {
    let component: CoatoAskueBindingComponent;
    let fixture: ComponentFixture<CoatoAskueBindingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: imports,
            providers: [FormModalComponent],
            declarations: [CoatoAskueBindingComponent, CoatoAskueBindingFormComponent]
        })
            .compileComponents();
    login();

        fixture = TestBed.createComponent(CoatoAskueBindingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have correct title', () => {
        expect(component.title).toEqual('MENU.REFERENCE.TECHNICAL_GUIDES.ASKUE_BINDING_ACCORDING_TO_COATO');
    });

    it('should have correct request', () => {
        expect(component.request).toEqual(new ReferenceListRequest(ReferenceApiUrls.COATO_ASKUE_BINDING));
    });

    it('should open form modal when addUpdate method is called', () => {
        spyOn(FormModalComponent, 'showModal').and.callThrough();

        component.addUpdate();

        expect(FormModalComponent.showModal).toHaveBeenCalledWith(
            CoatoAskueBindingFormComponent,
            component.title,
            null,
            SizeModal.sm
        );
    });
});
