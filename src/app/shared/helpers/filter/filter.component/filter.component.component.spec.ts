import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "../../../shared.module";

describe('FilterComponentComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule
      ],
      declarations: [ FilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
