import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverOrganizationsComponent } from './receiver.organizations.component';
import {SharedModule} from "@shared/shared.module";
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('ReceiverOrganizationsComponent', () => {
  let component: ReceiverOrganizationsComponent;
  let fixture: ComponentFixture<ReceiverOrganizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ ReceiverOrganizationsComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(ReceiverOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
