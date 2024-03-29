import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPurposesComponent } from './payment.purposes.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('PaymentPurposesComponent', () => {
  let component: PaymentPurposesComponent;
  let fixture: ComponentFixture<PaymentPurposesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ PaymentPurposesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentPurposesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
