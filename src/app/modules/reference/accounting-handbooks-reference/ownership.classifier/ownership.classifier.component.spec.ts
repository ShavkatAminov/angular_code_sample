import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnershipClassifierComponent } from './ownership.classifier.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";


describe('OwnershipClassifierComponent', () => {
  let component: OwnershipClassifierComponent;
  let fixture: ComponentFixture<OwnershipClassifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ OwnershipClassifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnershipClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
