import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicationTypesComponent } from './indication.types.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";

describe('IndicationTypesComponent', () => {
  let component: IndicationTypesComponent;
  let fixture: ComponentFixture<IndicationTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ IndicationTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
