import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'app/app.module';

import { IndicationTypesFormComponent } from './indication.types.form.component';
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('IndicationTypesFormComponent', () => {
  let component: IndicationTypesFormComponent;
  let fixture: ComponentFixture<IndicationTypesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ IndicationTypesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicationTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
