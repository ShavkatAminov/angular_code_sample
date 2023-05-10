import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutageCausesComponent } from './outage.causes.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from 'app/shared/shared.module';
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('OutageCausesComponent', () => {
  let component: OutageCausesComponent;
  let fixture: ComponentFixture<OutageCausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ OutageCausesComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(OutageCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
