import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NationalEconomyBranchFormComponent } from './national.economy.branch.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('ManagementLevelsFormComponent', () => {
  let component: NationalEconomyBranchFormComponent;
  let fixture: ComponentFixture<NationalEconomyBranchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ NationalEconomyBranchFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalEconomyBranchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
