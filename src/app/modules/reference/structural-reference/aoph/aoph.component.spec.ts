import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AophComponent } from './aoph.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('AophComponent', () => {
  let component: AophComponent;
  let fixture: ComponentFixture<AophComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ AophComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(AophComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
