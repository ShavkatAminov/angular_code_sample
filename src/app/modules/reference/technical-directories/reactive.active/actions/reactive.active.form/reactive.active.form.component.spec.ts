import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveActiveFormComponent } from './reactive.active.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('ReactiveActiveFormComponent', () => {
  let component: ReactiveActiveFormComponent;
  let fixture: ComponentFixture<ReactiveActiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ ReactiveActiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveActiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
