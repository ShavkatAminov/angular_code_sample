import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "../../../shared.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('FilterComponentComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ FilterComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
