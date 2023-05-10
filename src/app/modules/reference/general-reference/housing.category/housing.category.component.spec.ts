import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HousingCategoryComponent } from './housing.category.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('HousingCategoryComponent', () => {
  let component: HousingCategoryComponent;
  let fixture: ComponentFixture<HousingCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ HousingCategoryComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(HousingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
