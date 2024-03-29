import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitationDivisionsComponent } from './habitation.divisions.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from 'app/shared/shared.module';
import {AppModule} from "../../../../app.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('HabitationDivisionsComponent', () => {
  let component: HabitationDivisionsComponent;
  let fixture: ComponentFixture<HabitationDivisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ HabitationDivisionsComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(HabitationDivisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
