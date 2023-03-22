import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesFormComponent } from './currencies.form.component';
import {SharedModule} from "../../../../../../shared/shared.module";
import {AppModule} from "../../../../../../app.module";

describe('CurrenciesFormComponent', () => {
  let component: CurrenciesFormComponent;
  let fixture: ComponentFixture<CurrenciesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ CurrenciesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrenciesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
