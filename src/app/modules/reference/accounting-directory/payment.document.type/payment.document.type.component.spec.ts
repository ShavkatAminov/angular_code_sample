import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentDocumentTypeComponent } from "./payment.document.type.component";
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('PaymentDocumentTypeComponent', () => {
  let component: PaymentDocumentTypeComponent;
  let fixture: ComponentFixture<PaymentDocumentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ PaymentDocumentTypeComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(PaymentDocumentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
