import { ComponentFixture, TestBed } from '@angular/core/testing';

import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {TreasuryOrganizationalFormComponent} from "./treasury.organizational.form.component";
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
describe('TreasuryOrganizationalComponent', () => {
  let component: TreasuryOrganizationalFormComponent;
  let fixture: ComponentFixture<TreasuryOrganizationalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ TreasuryOrganizationalFormComponent ]
    })
        .compileComponents();

    fixture = TestBed.createComponent(TreasuryOrganizationalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
