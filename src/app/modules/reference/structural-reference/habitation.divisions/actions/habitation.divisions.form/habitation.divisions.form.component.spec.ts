import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'app/app.module';

import { HabitationDivisionsFormComponent } from './habitation.divisions.form.component';
import {SharedModule} from "@shared/shared.module";

describe('HabitationDivisionsFormComponent', () => {
  let component: HabitationDivisionsFormComponent;
  let fixture: ComponentFixture<HabitationDivisionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ HabitationDivisionsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitationDivisionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
