import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationTypesFormComponent } from './operation.types.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('OperationTypesFormComponent', () => {
  let component: OperationTypesFormComponent;
  let fixture: ComponentFixture<OperationTypesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
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
