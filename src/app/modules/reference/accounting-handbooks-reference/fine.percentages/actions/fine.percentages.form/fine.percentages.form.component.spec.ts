import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinePercentagesFormComponent } from './fine.percentages.form.component';

import {AppModule} from "@app/app.module";
import {SharedModule} from "@shared/shared.module";
import {imports} from "@test/imports";
describe('FinePercentagesFormComponent', () => {
  let component: FinePercentagesFormComponent;
  let fixture: ComponentFixture<FinePercentagesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ FinePercentagesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinePercentagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
