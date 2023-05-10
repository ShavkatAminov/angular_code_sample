import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationTypeComponent } from './calculation.type.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('CalculationTypeComponent', () => {
  let component: CalculationTypeComponent;
  let fixture: ComponentFixture<CalculationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ CalculationTypeComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(CalculationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
