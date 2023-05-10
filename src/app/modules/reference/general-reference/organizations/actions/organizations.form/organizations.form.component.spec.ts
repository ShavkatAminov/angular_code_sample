import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsFormComponent } from './organizations.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('OrganizationsFormComponent', () => {
  let component: OrganizationsFormComponent;
  let fixture: ComponentFixture<OrganizationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ OrganizationsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
