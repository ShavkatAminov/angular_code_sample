import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalFormClassifiersComponent } from './legal.form.classifiers.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";

describe('Egal_form_classifiersComponent', () => {
  let component: LegalFormClassifiersComponent;
  let fixture: ComponentFixture<LegalFormClassifiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ LegalFormClassifiersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalFormClassifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
