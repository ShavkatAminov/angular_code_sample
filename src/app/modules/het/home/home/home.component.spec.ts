import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {imports} from "@test/imports";
import {
    LegalActRecalculationComponent
} from "@app/modules/accounting-settlement-lc/acts/legal.act.recalculation/legal.act.recalculation.component";

import {login} from "@test/login";
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: imports,
      declarations: [ HomeComponent ],
    })
    .compileComponents();
    login();
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });

  it('should create',() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      expect(component).toBeTruthy();
  });
});
