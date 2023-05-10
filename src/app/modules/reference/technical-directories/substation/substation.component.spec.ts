import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstationComponent } from './substation.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('SubstationComponent', () => {
  let component: SubstationComponent;
  let fixture: ComponentFixture<SubstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ SubstationComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(SubstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
