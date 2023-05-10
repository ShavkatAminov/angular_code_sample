import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankMfosComponent } from './bank.mfos.component';
import { SharedModule } from 'app/shared/shared.module';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('BankMfosComponent', () => {
  let component: BankMfosComponent;
  let fixture: ComponentFixture<BankMfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ BankMfosComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(BankMfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
