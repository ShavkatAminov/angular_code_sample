import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";
import {ConsumptionVolumeComponent} from "./consumption.volume.component";

describe('ConsumptionVolumeComponent', () => {
  let component: ConsumptionVolumeComponent;
  let fixture: ComponentFixture<ConsumptionVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        TranslocoModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ ConsumptionVolumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumptionVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
