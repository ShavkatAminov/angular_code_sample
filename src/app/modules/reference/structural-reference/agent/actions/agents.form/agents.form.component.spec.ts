import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsFormComponent } from './agents.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('AgentFormComponent', () => {
  let component: AgentsFormComponent;
  let fixture: ComponentFixture<AgentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ AgentsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
