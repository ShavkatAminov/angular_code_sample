import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationTypesFormComponent } from './operation.types.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('OperationTypesFormComponent', () => {
  let component: OperationTypesFormComponent;
  let fixture: ComponentFixture<OperationTypesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ OperationTypesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
