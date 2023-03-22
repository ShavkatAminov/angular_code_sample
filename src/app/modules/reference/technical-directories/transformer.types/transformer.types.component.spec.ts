import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformerTypesComponent } from './transformer.types.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";

describe('TransformerTypesComponent', () => {
  let component: TransformerTypesComponent;
  let fixture: ComponentFixture<TransformerTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        TranslocoModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ TransformerTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformerTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
