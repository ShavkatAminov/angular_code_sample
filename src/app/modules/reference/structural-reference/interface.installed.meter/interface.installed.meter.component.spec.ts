import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceInstalledMeterComponent } from './interface.installed.meter.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../../../app.module";
import {SharedModule} from "../../../../shared/shared.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('InterfaceInstalledMeterComponent', () => {
  let component: InterfaceInstalledMeterComponent;
  let fixture: ComponentFixture<InterfaceInstalledMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ InterfaceInstalledMeterComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(InterfaceInstalledMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
