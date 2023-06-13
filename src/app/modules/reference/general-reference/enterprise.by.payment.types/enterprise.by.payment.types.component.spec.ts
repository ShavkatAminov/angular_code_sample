import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnterpriseByPaymentTypesComponent } from './enterprise.by.payment.types.component';

import {imports} from "@test/imports";
describe('WorkPlaceComponent', () => {
  let component: EnterpriseByPaymentTypesComponent;
  let fixture: ComponentFixture<EnterpriseByPaymentTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ EnterpriseByPaymentTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseByPaymentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
