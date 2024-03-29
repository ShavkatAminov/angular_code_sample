import { ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from "@shared/shared.module";
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../../../app.module";
import {LegalReportStatusesComponent} from "./legal.report.statuses.component";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('LegalReportStatusesComponent', () => {
  let component: LegalReportStatusesComponent;
  let fixture: ComponentFixture<LegalReportStatusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ LegalReportStatusesComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(LegalReportStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
