import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutageCausesFormComponent } from './outage.causes.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('OutageCausesFormComponent', () => {
  let component: OutageCausesFormComponent;
  let fixture: ComponentFixture<OutageCausesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ OutageCausesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutageCausesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
