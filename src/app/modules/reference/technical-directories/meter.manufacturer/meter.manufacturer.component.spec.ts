import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterManufacturerComponent } from './meter.manufacturer.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from 'app/shared/shared.module';
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('MeterManufacturesComponent', () => {
  let component: MeterManufacturerComponent;
  let fixture: ComponentFixture<MeterManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ MeterManufacturerComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(MeterManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
