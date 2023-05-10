import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveActiveComponent } from './reactive.active.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../../../app.module";
import {SharedModule} from "../../../../shared/shared.module";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('ReactiveActiveComponent', () => {
  let component: ReactiveActiveComponent;
  let fixture: ComponentFixture<ReactiveActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ ReactiveActiveComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(ReactiveActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
