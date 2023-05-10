import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterManufacturesFormComponent } from './meter.manufactures.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('MeterManufacturesFormComponent', () => {
  let component: MeterManufacturesFormComponent;
  let fixture: ComponentFixture<MeterManufacturesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ MeterManufacturesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeterManufacturesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
