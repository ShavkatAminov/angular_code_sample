import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsFormComponent } from './materials.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('MaterialsFormComponent', () => {
  let component: MaterialsFormComponent;
  let fixture: ComponentFixture<MaterialsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ MaterialsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
