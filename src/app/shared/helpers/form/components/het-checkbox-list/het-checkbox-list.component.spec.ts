import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HetCheckboxListComponent } from './het-checkbox-list.component';
import {AppModule} from "../../../../../app.module";
import {SharedModule} from "../../../../shared.module";

describe('HetCheckboxListComponent', () => {
  let component: HetCheckboxListComponent;
  let fixture: ComponentFixture<HetCheckboxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ HetCheckboxListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetCheckboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
