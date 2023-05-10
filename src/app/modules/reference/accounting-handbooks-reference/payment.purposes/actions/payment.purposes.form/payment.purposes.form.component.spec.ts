import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPurposesFormComponent } from './payment.purposes.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('PaymentPurposesFormComponent', () => {
  let component: PaymentPurposesFormComponent;
  let fixture: ComponentFixture<PaymentPurposesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ PaymentPurposesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentPurposesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
