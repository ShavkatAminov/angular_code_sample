import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationTypesComponent } from './operation.types.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('OperationTypesComponent', () => {
  let component: OperationTypesComponent;
  let fixture: ComponentFixture<OperationTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ OperationTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
