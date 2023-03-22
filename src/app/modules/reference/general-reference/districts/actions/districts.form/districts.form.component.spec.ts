import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictsFormComponent } from './districts.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('DistrictsFormComponent', () => {
  let component: DistrictsFormComponent;
  let fixture: ComponentFixture<DistrictsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ DistrictsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
