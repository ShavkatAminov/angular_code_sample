import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersFormComponent } from './managers.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('ManagersFormComponent', () => {
  let component: ManagersFormComponent;
  let fixture: ComponentFixture<ManagersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ ManagersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
