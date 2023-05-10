import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsComponent } from './materials.component';
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";
import {TranslocoModule} from "@ngneat/transloco";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('MaterialsComponent', () => {
  let component: MaterialsComponent;
  let fixture: ComponentFixture<MaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ MaterialsComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(MaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
