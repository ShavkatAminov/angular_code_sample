import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HetYearPickerComponent } from './het-year-picker.component';
import {imports} from "@test/imports";
import {login} from "@test/login";

describe('HetYearPickerComponent', () => {
  let component: HetYearPickerComponent;
  let fixture: ComponentFixture<HetYearPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: imports,
      declarations: [ HetYearPickerComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(HetYearPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
