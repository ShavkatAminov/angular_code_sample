import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsumptionVolumeFormComponent } from './consumption.volume.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('ConsumptionVolumeFormComponent', () => {
  let component: ConsumptionVolumeFormComponent;
  let fixture: ComponentFixture<ConsumptionVolumeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ ConsumptionVolumeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumptionVolumeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
