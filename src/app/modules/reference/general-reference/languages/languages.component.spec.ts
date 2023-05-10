import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguagesComponent } from './languages.component';
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";
import {TranslocoModule} from "@ngneat/transloco";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('LanguagesComponent', () => {
  let component: LanguagesComponent;
  let fixture: ComponentFixture<LanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ LanguagesComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(LanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
