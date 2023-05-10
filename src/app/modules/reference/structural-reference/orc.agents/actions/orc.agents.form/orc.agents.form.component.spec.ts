import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcAgentsFormComponent } from './orc.agents.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('OrcAgentsFormComponent', () => {
  let component: OrcAgentsFormComponent;
  let fixture: ComponentFixture<OrcAgentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ OrcAgentsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrcAgentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
