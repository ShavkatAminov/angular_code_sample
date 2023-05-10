import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstationFormComponent } from './substation.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('SubstationFormComponent', () => {
  let component: SubstationFormComponent;
  let fixture: ComponentFixture<SubstationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ SubstationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubstationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
