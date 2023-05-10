import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadesComponent } from './brigades.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('AophComponent', () => {
  let component: BrigadesComponent;
  let fixture: ComponentFixture<BrigadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ BrigadesComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(BrigadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
