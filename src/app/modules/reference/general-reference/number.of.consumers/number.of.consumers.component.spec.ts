import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfConsumersComponent } from './number.of.consumers.component';

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('TransferConsumerRespToRespComponent', () => {
  let component: NumberOfConsumersComponent;
  let fixture: ComponentFixture<NumberOfConsumersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ NumberOfConsumersComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(NumberOfConsumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
