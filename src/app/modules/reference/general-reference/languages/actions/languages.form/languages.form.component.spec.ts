import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesFormComponent } from './languages.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('LanguagesFormComponent', () => {
  let component: LanguagesFormComponent;
  let fixture: ComponentFixture<LanguagesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ LanguagesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
