import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterManufacturerComponent } from './meter.manufacturer.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from 'app/shared/shared.module';
import {AppModule} from "../../../../app.module";

describe('MeterManufacturesComponent', () => {
  let component: MeterManufacturerComponent;
  let fixture: ComponentFixture<MeterManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        TranslocoModule,
        HttpClientModule,
        AppModule,
      ],
      declarations: [ MeterManufacturerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeterManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
