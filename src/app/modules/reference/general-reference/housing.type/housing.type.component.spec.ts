import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HousingTypeComponent } from './housing.type.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";

describe('HousingTypeComponent', () => {
  let component: HousingTypeComponent;
  let fixture: ComponentFixture<HousingTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ HousingTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
