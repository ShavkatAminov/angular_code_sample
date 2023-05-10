import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AophFormComponent } from './aoph.form.component';
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../../../app.module";

import {imports} from "@test/imports";
describe('AophFormComponent', () => {
  let component: AophFormComponent;
  let fixture: ComponentFixture<AophFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ AophFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AophFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
