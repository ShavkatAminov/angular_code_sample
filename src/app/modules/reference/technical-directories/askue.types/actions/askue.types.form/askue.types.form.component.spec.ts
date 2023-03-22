import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskueTypesFormComponent } from './askue.types.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('AskueTypesFormComponent', () => {
  let component: AskueTypesFormComponent;
  let fixture: ComponentFixture<AskueTypesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ AskueTypesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskueTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
