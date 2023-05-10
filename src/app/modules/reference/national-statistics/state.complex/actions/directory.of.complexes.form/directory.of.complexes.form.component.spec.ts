import {DirectoryOfComplexesFormComponent} from './directory.of.complexes.form.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TranslocoTestingModule} from "@ngneat/transloco";
import {BasicModalForm} from "../../../../../../shared/helpers/form/modal/basic.modal.form";
import {FormGroup} from "@angular/forms";
import {ReferenceFormRequest} from "../../../../basic/ReferenceFormRequest";
import {SharedModule} from "../../../../../../shared/shared.module";

import {AppModule} from "../../../../../../app.module";

import {imports} from "@test/imports";
describe('DirectoryOfComplexesFormComponent', () => {
    let component: DirectoryOfComplexesFormComponent;
    let fixture: ComponentFixture<DirectoryOfComplexesFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: imports,
            declarations: [DirectoryOfComplexesFormComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(DirectoryOfComplexesFormComponent);
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

    it('should call beforeSave method and set request body with form values', () => {
        component.form.controls['nameUz'].setValue('name');
        component.form.controls['code'].setValue('1');
        component.form.controls['budgetCode'].setValue('urladdress');
        component.form.controls['status'].setValue(false);

        component.beforeSave();

        expect(component.request.body).toEqual({
            nameUz: 'name',
            code: '1',
            budgetCode: 'urladdress',
            status: false
        });
    });
});
