import { ComponentFixture, TestBed } from '@angular/core/testing';

import {TreasuryOrganizationalFormFormComponent} from "./treasury.organizational.form.form.component";
import {SharedModule} from "../../../../../../shared/shared.module";
import {AppModule} from "../../../../../../app.module";

import {imports} from "@test/imports";
describe('TreasuryOrganizationalFormComponent', () => {
  let component: TreasuryOrganizationalFormFormComponent;
  let fixture: ComponentFixture<TreasuryOrganizationalFormFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ TreasuryOrganizationalFormFormComponent ]
    })
        .compileComponents();

    fixture = TestBed.createComponent(TreasuryOrganizationalFormFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
