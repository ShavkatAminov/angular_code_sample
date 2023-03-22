import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimezonesComponent } from './timezones.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";

describe('TimezonesComponent', () => {
  let component: TimezonesComponent;
  let fixture: ComponentFixture<TimezonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ TimezonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimezonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
