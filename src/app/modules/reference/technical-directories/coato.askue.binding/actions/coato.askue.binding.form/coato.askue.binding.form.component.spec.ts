import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TranslocoTestingModule} from "@ngneat/transloco";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {FormGroup} from "@angular/forms";
import {ReferenceDropDownRequest} from "../../../../basic/ReferenceDropDownRequest";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {SharedModule} from "../../../../../../shared/shared.module";

import {CoatoAskueBindingFormComponent} from './coato.askue.binding.form.component';
import {AppModule} from "../../../../../../app.module";

describe('CoatoAskueBindingFormComponent', () => {
    let component: CoatoAskueBindingFormComponent;
    let fixture: ComponentFixture<CoatoAskueBindingFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                TranslocoTestingModule,
                SharedModule
            ],
            declarations: [CoatoAskueBindingFormComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(CoatoAskueBindingFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should extend BasicModalForm', () => {
        expect(component instanceof BasicModalForm).toBeTruthy();
    });

    it('should have form of type FormGroup', () => {
        expect(component.form instanceof FormGroup).toBeTruthy();
    });

    it('should have request of type ReferenceFormRequest', () => {
        expect(component.request instanceof ReferenceFormRequest).toBeTruthy();
    });

    it('should have requests of type ReferenceDropDownRequest', () => {
        expect(component.coatoBranchesRequest instanceof ReferenceDropDownRequest).toBeTruthy();
        expect(component.askueTypesRequest instanceof ReferenceDropDownRequest).toBeTruthy();
        expect(component.processNumbersRequest instanceof ReferenceDropDownRequest).toBeTruthy();
    });


    it('should call beforeSave method and set request body with form values and parsed providerId', () => {
        component.form.controls['coatoBranchId'].setValue(1);
        component.form.controls['askueTypeId'].setValue(1);
        component.form.controls['urlAddress'].setValue('urladdress');
        component.form.controls['processNumberId'].setValue(1);
        component.form.controls['status'].setValue(false);

        component.beforeSave();

        expect(component.request.body).toEqual({
            coatoBranchId: 1,
            askueTypeId: 1,
            urlAddress: 'urladdress',
            processNumberId: 1,
            status: false
        });
    });
});
