import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalWorkUnderwayComponent } from './technical.work.underway.component';
import {TranslocoModule} from "@ngneat/transloco";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('TechnicalWorkUnderwayComponent', () => {
  let component: TechnicalWorkUnderwayComponent;
  let fixture: ComponentFixture<TechnicalWorkUnderwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ TechnicalWorkUnderwayComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(TechnicalWorkUnderwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
