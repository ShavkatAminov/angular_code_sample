import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import {SizeModal} from '../../../../shared/helpers/modal/modal.component';
import {ReferenceListRequest} from '../../basic/ReferenceListRequest';
import {ReferenceApiUrls} from '../../referenceApiUrls';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "../../../../shared/shared.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AgGridModule} from "ag-grid-angular";
import {TranslocoModule} from "@ngneat/transloco";
import {StateComplexComponent} from './state.complex.component';
import {
    DirectoryOfComplexesFormComponent
} from "./actions/directory.of.complexes.form/directory.of.complexes.form.component";

describe('DirectoryOfComplexesComponent', () => {
    let component: StateComplexComponent;
    let fixture: ComponentFixture<StateComplexComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StateComplexComponent, DirectoryOfComplexesFormComponent],
            imports: [
                HttpClientTestingModule,
                AgGridModule,
                AppModule,
                SharedModule,
                TranslocoModule,
            ],
            providers: [FormModalComponent],
        })
            .compileComponents();

        fixture = TestBed.createComponent(StateComplexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have correct title', () => {
        expect(component.title).toEqual('MENU.REFERENCE.NATIONAL_STATISTICS_HANDBOOKS.DIRECTORY_OF_COMPLEXES');
    });

    it('should have correct request', () => {
        expect(component.request).toEqual(new ReferenceListRequest(ReferenceApiUrls.STATE_COMPLEX));
    });

    it('should open form modal when addUpdate method is called', () => {
        spyOn(FormModalComponent, 'showModal').and.callThrough();

        component.addUpdate();

        expect(FormModalComponent.showModal).toHaveBeenCalledWith(
            DirectoryOfComplexesFormComponent,
            component.title,
            null,
            SizeModal.sm
        );
    });
});
