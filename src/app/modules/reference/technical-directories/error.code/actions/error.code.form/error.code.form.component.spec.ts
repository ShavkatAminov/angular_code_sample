import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorCodeFormComponent } from './error.code.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('ErrorCodeFormComponent', () => {
  let component: ErrorCodeFormComponent;
  let fixture: ComponentFixture<ErrorCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ ErrorCodeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
