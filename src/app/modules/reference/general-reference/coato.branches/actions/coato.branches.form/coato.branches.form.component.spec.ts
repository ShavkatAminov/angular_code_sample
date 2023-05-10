import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatoBranchesFormComponent } from './coato.branches.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('CoatoBranchesFormComponent', () => {
  let component: CoatoBranchesFormComponent;
  let fixture: ComponentFixture<CoatoBranchesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ CoatoBranchesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoatoBranchesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
