import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicActivityTypeFormComponent } from './economic.activity.type.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('EconomicActivityTypeFormComponent', () => {
  let component: EconomicActivityTypeFormComponent;
  let fixture: ComponentFixture<EconomicActivityTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ EconomicActivityTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomicActivityTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
