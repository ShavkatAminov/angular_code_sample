import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderOrganizationTypesComponent } from './sender.organization.types.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('SenderOrganizationTypesComponent', () => {
  let component: SenderOrganizationTypesComponent;
  let fixture: ComponentFixture<SenderOrganizationTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedModule,
      ],
      declarations: [ SenderOrganizationTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderOrganizationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
