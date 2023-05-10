import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterTypeFormComponent } from './meter.type.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('MeterTypeFormComponent', () => {
  let component: MeterTypeFormComponent;
  let fixture: ComponentFixture<MeterTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ MeterTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeterTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
