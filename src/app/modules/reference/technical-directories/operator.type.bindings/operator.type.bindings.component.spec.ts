import { ComponentFixture, TestBed } from '@angular/core/testing';
import {SizeModal} from '@shared/helpers/modal/modal.component';
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import { ReferenceListRequest } from '../../basic/ReferenceListRequest';
import { ReferenceApiUrls } from '../../referenceApiUrls';
import { OperatorTypeBindingFormComponent } from './actions/operator.type.binding.form/operator.type.binding.form.component';
import { OperatorTypeBindingsComponent } from './operator.type.bindings.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('OperatorTypeBindingComponent', () => {
  let component: OperatorTypeBindingsComponent;
  let fixture: ComponentFixture<OperatorTypeBindingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, SharedModule],
      declarations: [
        OperatorTypeBindingsComponent,
        OperatorTypeBindingFormComponent
      ],
      providers: [
        FormModalComponent
      ]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorTypeBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(component.title).toEqual('MENU.REFERENCE.TECHNICAL_GUIDES.OPERATOR_TYPE_BINDING');
  });

  it('should have correct request', () => {
    expect(component.request).toEqual(new ReferenceListRequest(ReferenceApiUrls.OPERATOR_TYPE_BINDINGS));
  });

  it('should open form modal when addUpdate method is called', () => {
    spyOn(FormModalComponent, 'showModal').and.callThrough();

    component.addUpdate();

    expect(FormModalComponent.showModal).toHaveBeenCalledWith(
        OperatorTypeBindingFormComponent,
        component.title,
        null,
        SizeModal.sm
    );
  });
});
