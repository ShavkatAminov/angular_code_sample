import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HetRadioStaticComponent } from './het-radio-static.component';
import {AppModule} from "../../../../../app.module";

import {imports} from "@test/imports";
describe('HetRadioStaticComponent', () => {
  let component: HetRadioStaticComponent;
  let fixture: ComponentFixture<HetRadioStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ HetRadioStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetRadioStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
