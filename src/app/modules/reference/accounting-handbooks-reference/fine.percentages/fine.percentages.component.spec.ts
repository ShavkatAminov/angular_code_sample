import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinePercentagesComponent } from './fine.percentages.component';
import {AppModule} from "@app/app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('FinePercentagesComponent', () => {
  let component: FinePercentagesComponent;
  let fixture: ComponentFixture<FinePercentagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ FinePercentagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinePercentagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
