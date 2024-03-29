import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverOrganizationsFormComponent } from './receiver.organizations.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('ReceiverOrganizationsFormComponent', () => {
  let component: ReceiverOrganizationsFormComponent;
  let fixture: ComponentFixture<ReceiverOrganizationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ ReceiverOrganizationsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverOrganizationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
