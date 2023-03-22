import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderOrganizatonTypesFormComponent } from './sender.organizaton.types.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('SenderOrganizatonTypesFormComponent', () => {
  let component: SenderOrganizatonTypesFormComponent;
  let fixture: ComponentFixture<SenderOrganizatonTypesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedModule,
      ],
      declarations: [ SenderOrganizatonTypesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderOrganizatonTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
