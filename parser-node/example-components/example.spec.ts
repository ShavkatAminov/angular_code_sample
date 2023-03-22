import { ComponentFixture, TestBed } from '@angular/core/testing';

import { #compoentClassNameComponent } from './#fileName.component';
import {SharedModule} from "../../../shared/shared.module";
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../../app.module";

describe('#compoentClassNameComponent', () => {
  let component: #compoentClassNameComponent;
  let fixture: ComponentFixture<#compoentClassNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ #compoentClassNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(#compoentClassNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
