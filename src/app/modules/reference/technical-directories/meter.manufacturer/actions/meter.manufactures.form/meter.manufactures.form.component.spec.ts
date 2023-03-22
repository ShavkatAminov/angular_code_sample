import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterManufacturesFormComponent } from './meter.manufactures.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('MeterManufacturesFormComponent', () => {
  let component: MeterManufacturesFormComponent;
  let fixture: ComponentFixture<MeterManufacturesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ MeterManufacturesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeterManufacturesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
