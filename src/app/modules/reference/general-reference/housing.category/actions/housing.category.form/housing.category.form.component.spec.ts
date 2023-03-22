import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HousingCategoryFormComponent } from './housing.category.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('HousingCategoryFormComponent', () => {
  let component: HousingCategoryFormComponent;
  let fixture: ComponentFixture<HousingCategoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ HousingCategoryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
