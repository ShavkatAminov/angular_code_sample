import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformerTypesComponent } from './transformer.types.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('TransformerTypesComponent', () => {
  let component: TransformerTypesComponent;
  let fixture: ComponentFixture<TransformerTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ TransformerTypesComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(TransformerTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
