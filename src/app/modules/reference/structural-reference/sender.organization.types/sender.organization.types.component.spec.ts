import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderOrganizationTypesComponent } from './sender.organization.types.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('SenderOrganizationTypesComponent', () => {
  let component: SenderOrganizationTypesComponent;
  let fixture: ComponentFixture<SenderOrganizationTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ SenderOrganizationTypesComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(SenderOrganizationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
