import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TariffsFormComponent } from './tariffs.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('TariffsFormComponent', () => {
  let component: TariffsFormComponent;
  let fixture: ComponentFixture<TariffsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ TariffsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
