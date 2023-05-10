import { ComponentFixture, TestBed } from '@angular/core/testing';
import {SizeModal} from '../../../../shared/helpers/modal/modal.component';
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";
import { ReferenceListRequest } from '../../basic/ReferenceListRequest';
import { ReferenceApiUrls } from '../../referenceApiUrls';
import {ProviderTypeComponent} from "./provider.type.component";
import {ProviderTypeFormComponent} from "./actions/provider.type.form/provider.type.form.component";
import {AppModule} from "../../../../app.module";
import {SharedModule} from "../../../../shared/shared.module";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {By} from "@angular/platform-browser";
import {AgGridModule} from "ag-grid-angular";
import {TranslocoModule} from "@ngneat/transloco";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('ProviderTypeComponent', () => {
  let component: ProviderTypeComponent;
  let fixture: ComponentFixture<ProviderTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      providers: [FormModalComponent],
      declarations: [ ProviderTypeComponent, ProviderTypeFormComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(ProviderTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a grid with column definitions", () => {
    const grid = fixture.debugElement.query(By.css("ag-grid-angular"));
    expect(grid).toBeTruthy();
    expect(component.columnDefs.length).toBeGreaterThan(0);
  });

  it('should have correct title', () => {
    expect(component.title).toEqual('MENU.REFERENCE.TECHNICAL_GUIDES.PROVIDER_TYPES_REFERENCE');
  });

  it('should have correct request', () => {
    expect(component.request).toEqual(new ReferenceListRequest(ReferenceApiUrls.PROVIDER_TYPE));
  });

  it('should open form modal when addUpdate method is called', () => {
    spyOn(FormModalComponent, 'showModal').and.callThrough();

    component.addUpdate();

    expect(FormModalComponent.showModal).toHaveBeenCalledWith(
        ProviderTypeFormComponent,
        component.title,
        null,
        SizeModal.sm
    );
  });
});
