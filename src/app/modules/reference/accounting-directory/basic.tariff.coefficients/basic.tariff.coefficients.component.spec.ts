import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicTariffCoefficientsComponent } from './basic.tariff.coefficients.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('BasicTariffCoefficientsComponent', () => {
  let component: BasicTariffCoefficientsComponent;
  let fixture: ComponentFixture<BasicTariffCoefficientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ BasicTariffCoefficientsComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(BasicTariffCoefficientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
