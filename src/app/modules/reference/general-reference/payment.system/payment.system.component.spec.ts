import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSystemComponent } from './payment.system.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from '@shared/shared.module';
import {AppModule} from "@app/app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('PaymentSystemComponent', () => {
  let component: PaymentSystemComponent;
  let fixture: ComponentFixture<PaymentSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ PaymentSystemComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(PaymentSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
