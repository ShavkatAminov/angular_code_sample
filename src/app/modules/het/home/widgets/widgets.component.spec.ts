import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsComponent } from './widgets.component';
import {AppModule} from "../../../../app.module";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../../../shared/shared.module";

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        MatIconModule,
        SharedModule,
      ],
      declarations: [ WidgetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
