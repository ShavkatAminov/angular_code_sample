import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcAgentsComponent } from './orc.agents.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('OrcAgentsComponent', () => {
  let component: OrcAgentsComponent;
  let fixture: ComponentFixture<OrcAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ OrcAgentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrcAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
