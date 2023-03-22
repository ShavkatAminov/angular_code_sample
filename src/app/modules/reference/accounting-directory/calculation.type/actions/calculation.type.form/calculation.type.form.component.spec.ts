import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationTypeFormComponent } from './calculation.type.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('CalculationTypeFormComponent', () => {
  let component: CalculationTypeFormComponent;
  let fixture: ComponentFixture<CalculationTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ CalculationTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
