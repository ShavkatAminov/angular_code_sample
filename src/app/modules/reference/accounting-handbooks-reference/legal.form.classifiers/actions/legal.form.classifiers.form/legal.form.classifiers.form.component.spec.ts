import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalFormClassifiersFormComponent } from './legal.form.classifiers.form.component';
import { AppModule } from 'app/app.module';
import {SharedModule} from "../../../../../../shared/shared.module";
import {imports} from "@test/imports";
describe('Egal_form_classifiersFormComponent', () => {
  let component: LegalFormClassifiersFormComponent;
  let fixture: ComponentFixture<LegalFormClassifiersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ LegalFormClassifiersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalFormClassifiersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
