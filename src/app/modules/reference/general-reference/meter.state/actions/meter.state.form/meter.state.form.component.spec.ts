import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeterStateFormComponent } from './meter.state.form.component';
import {imports} from "@test/imports";
describe('PaymentSystemFormComponent', () => {
  let component: MeterStateFormComponent;
  let fixture: ComponentFixture<MeterStateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ MeterStateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeterStateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
