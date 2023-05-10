import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceInstalledMeterFormComponent } from './interface.installed.meter.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('InterfaceInstalledMeterFormComponent', () => {
  let component: InterfaceInstalledMeterFormComponent;
  let fixture: ComponentFixture<InterfaceInstalledMeterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ InterfaceInstalledMeterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceInstalledMeterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
