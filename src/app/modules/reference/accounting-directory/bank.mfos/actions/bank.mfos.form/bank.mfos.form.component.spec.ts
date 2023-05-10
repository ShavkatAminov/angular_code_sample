import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'app/app.module';

import { BankMfosFormComponent } from './bank.mfos.form.component';
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('BankMfosFormComponent', () => {
  let component: BankMfosFormComponent;
  let fixture: ComponentFixture<BankMfosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ BankMfosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankMfosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
