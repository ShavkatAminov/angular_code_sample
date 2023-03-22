import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstationComponent } from './substation.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('SubstationComponent', () => {
  let component: SubstationComponent;
  let fixture: ComponentFixture<SubstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ SubstationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
