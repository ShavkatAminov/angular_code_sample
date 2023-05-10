import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HetSelectStaticComponent } from './het-select-static.component';
import {AppModule} from "../../../../../app.module";

import {imports} from "@test/imports";
describe('HetRadioStaticComponent', () => {
  let component: HetSelectStaticComponent;
  let fixture: ComponentFixture<HetSelectStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ HetSelectStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetSelectStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
