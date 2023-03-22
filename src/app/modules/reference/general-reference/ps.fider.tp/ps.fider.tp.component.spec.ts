import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsFiderTpCompoent } from './ps.fider.tp.component';
import {SharedModule} from "../../../../shared/shared.module";
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../../../app.module";

describe('PsFiderTpComponent', () => {
  let component: PsFiderTpCompoent;
  let fixture: ComponentFixture<PsFiderTpCompoent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        TranslocoModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ PsFiderTpCompoent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsFiderTpCompoent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
