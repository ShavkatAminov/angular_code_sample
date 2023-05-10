import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerStatesComponent } from './consumer.states.component';
import {SharedModule} from "../../../../shared/shared.module";
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../../../app.module";


import {imports} from "@test/imports";
import {login} from "@test/login";
describe('ConsumerStatesComponent', () => {
  let component: ConsumerStatesComponent;
  let fixture: ComponentFixture<ConsumerStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ ConsumerStatesComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(ConsumerStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
