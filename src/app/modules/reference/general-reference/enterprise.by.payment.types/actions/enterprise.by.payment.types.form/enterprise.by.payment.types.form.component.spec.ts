import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnterpriseByPaymentTypesFormComponent } from './enterprise.by.payment.types.form.component';
import {imports} from "@test/imports";
describe('EnterpriseByPaymentTypesFormComponent', () => {
  let component: EnterpriseByPaymentTypesFormComponent;
  let fixture: ComponentFixture<EnterpriseByPaymentTypesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ EnterpriseByPaymentTypesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseByPaymentTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
