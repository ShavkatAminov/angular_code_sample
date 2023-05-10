import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsFormComponent } from './regions.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('RegionsFormComponent', () => {
  let component: RegionsFormComponent;
  let fixture: ComponentFixture<RegionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ RegionsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
