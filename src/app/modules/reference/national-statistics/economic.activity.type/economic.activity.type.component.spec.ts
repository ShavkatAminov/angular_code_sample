import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicActivityTypeComponent } from './economic.activity.type.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";
describe('EconomicActivityTypeComponent', () => {
  let component: EconomicActivityTypeComponent;
  let fixture: ComponentFixture<EconomicActivityTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ EconomicActivityTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomicActivityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
