import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardValuesFormComponent } from './standard.values.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('StandardValuesFormComponent', () => {
  let component: StandardValuesFormComponent;
  let fixture: ComponentFixture<StandardValuesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ StandardValuesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardValuesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
