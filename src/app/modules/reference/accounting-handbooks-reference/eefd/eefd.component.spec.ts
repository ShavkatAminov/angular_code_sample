import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EefdComponent } from './eefd.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
describe('EefdComponent', () => {
  let component: EefdComponent;
  let fixture: ComponentFixture<EefdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ EefdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EefdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
