import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeterStateComponent } from './meter.state.component';

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('PaymentSystemComponent', () => {
  let component: MeterStateComponent;
  let fixture: ComponentFixture<MeterStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ MeterStateComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(MeterStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
