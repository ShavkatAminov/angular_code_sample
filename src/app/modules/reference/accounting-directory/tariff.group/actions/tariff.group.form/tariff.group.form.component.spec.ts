import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'app/app.module';

import { TariffGroupFormComponent } from './tariff.group.form.component';
import {SharedModule} from "../../../../../../shared/shared.module";

import {imports} from "@test/imports";
describe('TariffGroupFormComponent', () => {
  let component: TariffGroupFormComponent;
  let fixture: ComponentFixture<TariffGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ TariffGroupFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
