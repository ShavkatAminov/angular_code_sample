import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentDocumentTypeFormComponent } from './payment.document.type.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('PaymentDocumentTypeFormComponent', () => {
  let component: PaymentDocumentTypeFormComponent;
  let fixture: ComponentFixture<PaymentDocumentTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ PaymentDocumentTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentDocumentTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
