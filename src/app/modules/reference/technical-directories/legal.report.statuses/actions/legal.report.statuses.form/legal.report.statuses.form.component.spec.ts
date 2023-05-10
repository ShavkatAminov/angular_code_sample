import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalReportStatusesFormComponent } from './legal.report.statuses.form.component';
import {SharedModule} from "../../../../../../shared/shared.module";
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../../../../../app.module";

import {imports} from "@test/imports";
describe('LegalReportStatusesFormComponent', () => {
  let component: LegalReportStatusesFormComponent;
  let fixture: ComponentFixture<LegalReportStatusesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ LegalReportStatusesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalReportStatusesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
