import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardValuesComponent } from './standard.values.component';
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";
import {TranslocoModule} from "@ngneat/transloco";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('StandartValuesComponent', () => {
  let component: StandardValuesComponent;
  let fixture: ComponentFixture<StandardValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ StandardValuesComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(StandardValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
