import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSystemFormComponent } from './payment.system.form.component';
import {AppModule} from "@app/app.module";
import { SharedModule } from '@shared/shared.module';

import {imports} from "@test/imports";
describe('PaymentSystemFormComponent', () => {
  let component: PaymentSystemFormComponent;
  let fixture: ComponentFixture<PaymentSystemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ PaymentSystemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentSystemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
