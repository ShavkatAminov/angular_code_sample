import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HousingTypeFormComponent } from './housing.type.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('HousingTypeFormComponent', () => {
  let component: HousingTypeFormComponent;
  let fixture: ComponentFixture<HousingTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ HousingTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
