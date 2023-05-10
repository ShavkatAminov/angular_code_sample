import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPlaceFormComponent } from './work.place.form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SharedModule} from "../../../../../../shared/shared.module";
import {AppModule} from "../../../../../../app.module";

import {imports} from "@test/imports";
describe('WorkPlaceFormComponent', () => {
  let component: WorkPlaceFormComponent;
  let fixture: ComponentFixture<WorkPlaceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ WorkPlaceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkPlaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
