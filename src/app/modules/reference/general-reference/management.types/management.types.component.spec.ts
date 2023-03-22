import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTypesComponent } from './management.types.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('ManagementTypesComponent', () => {
  let component: ManagementTypesComponent;
  let fixture: ComponentFixture<ManagementTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedModule,
      ],
      declarations: [ ManagementTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
