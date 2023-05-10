import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HetTimepickerComponent } from './het-timepicker.component';
import {imports} from "@test/imports";

describe('HetTimepickerComponent', () => {
  let component: HetTimepickerComponent;
  let fixture: ComponentFixture<HetTimepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: imports,
      declarations: [ HetTimepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
