import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentDocumentTypeComponent } from "./payment.document.type.component";
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";

describe('PaymentDocumentTypeComponent', () => {
  let component: PaymentDocumentTypeComponent;
  let fixture: ComponentFixture<PaymentDocumentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        TranslocoModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ PaymentDocumentTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentDocumentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
