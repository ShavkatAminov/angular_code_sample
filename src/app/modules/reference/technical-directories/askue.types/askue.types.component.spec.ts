import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AskueTypesComponent } from './askue.types.component';
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "@app/app.module";
import {TranslocoModule} from "@ngneat/transloco";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('AskueTypesComponent', () => {
  let component: AskueTypesComponent;
  let fixture: ComponentFixture<AskueTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ AskueTypesComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(AskueTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
