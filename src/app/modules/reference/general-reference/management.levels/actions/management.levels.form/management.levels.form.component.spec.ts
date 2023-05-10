import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagementLevelsFormComponent } from './management.levels.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('ManagementLevelsFormComponent', () => {
  let component: ManagementLevelsFormComponent;
  let fixture: ComponentFixture<ManagementLevelsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ ManagementLevelsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementLevelsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
