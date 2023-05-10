import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffGroupComponent } from './tariff.group.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from 'app/shared/shared.module';
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('TariffGroupComponent', () => {
  let component: TariffGroupComponent;
  let fixture: ComponentFixture<TariffGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ TariffGroupComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(TariffGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
