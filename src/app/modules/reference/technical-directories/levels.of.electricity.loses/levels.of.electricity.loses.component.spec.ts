import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsOfElectricityLosesComponent } from './levels.of.electricity.loses.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('AssesingLossNetworkComponent', () => {
  let component: LevelsOfElectricityLosesComponent;
  let fixture: ComponentFixture<LevelsOfElectricityLosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ LevelsOfElectricityLosesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsOfElectricityLosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
