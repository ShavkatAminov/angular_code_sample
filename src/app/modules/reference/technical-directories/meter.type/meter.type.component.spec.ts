import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterTypeComponent } from './meter.type.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('MeterTypeComponent', () => {
  let component: MeterTypeComponent;
  let fixture: ComponentFixture<MeterTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ MeterTypeComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(MeterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
