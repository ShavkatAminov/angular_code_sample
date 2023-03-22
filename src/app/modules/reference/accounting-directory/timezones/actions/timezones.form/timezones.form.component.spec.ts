import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimezonesFormComponent } from './timezones.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('TimezonesFormComponent', () => {
  let component: TimezonesFormComponent;
  let fixture: ComponentFixture<TimezonesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ TimezonesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimezonesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
