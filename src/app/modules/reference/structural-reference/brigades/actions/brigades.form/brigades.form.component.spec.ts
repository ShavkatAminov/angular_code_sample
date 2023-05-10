import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadesFormComponent } from './brigades.form.component';
import {SharedModule} from "../../../../../../shared/shared.module";
import {AppModule} from "../../../../../../app.module";

import {imports} from "@test/imports";
describe('AophFormComponent', () => {
  let component: BrigadesFormComponent;
  let fixture: ComponentFixture<BrigadesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ BrigadesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrigadesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
