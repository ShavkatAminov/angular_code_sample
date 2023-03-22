import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceComponent } from './workplace.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AgGridModule} from "ag-grid-angular";
import {AppModule} from "../../../../app.module";
import {SharedModule} from "../../../../shared/shared.module";
import {TranslocoModule} from "@ngneat/transloco";

describe('WorkPlaceComponent', () => {
  let component: WorkplaceComponent;
  let fixture: ComponentFixture<WorkplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AgGridModule,
        AppModule,
        SharedModule,
        TranslocoModule,
      ],
      declarations: [ WorkplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
