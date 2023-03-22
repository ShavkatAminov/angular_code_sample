import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatoBranchesComponent } from './coato.branches.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";

describe('CoatoBranchesComponent', () => {
  let component: CoatoBranchesComponent;
  let fixture: ComponentFixture<CoatoBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ CoatoBranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoatoBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
