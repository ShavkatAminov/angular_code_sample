import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationSystemsErrorCodesFormComponent } from './information.systems.error.codes.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";


describe('InformationSystemsErrorCodesFormComponent', () => {
  let component: InformationSystemsErrorCodesFormComponent;
  let fixture: ComponentFixture<InformationSystemsErrorCodesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ InformationSystemsErrorCodesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationSystemsErrorCodesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
