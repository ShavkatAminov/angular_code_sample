import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicTariffCoefficientsFormComponent } from './basic.tariff.coefficients.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('BasicTariffCoefficientsFormComponent', () => {
  let component: BasicTariffCoefficientsFormComponent;
  let fixture: ComponentFixture<BasicTariffCoefficientsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ BasicTariffCoefficientsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicTariffCoefficientsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
