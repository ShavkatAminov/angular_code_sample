import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NationalEconomyBranchComponent } from './national.economy.branch.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
describe('ManagementLevelsComponent', () => {
  let component: NationalEconomyBranchComponent;
  let fixture: ComponentFixture<NationalEconomyBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ NationalEconomyBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalEconomyBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
