import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformerTypesFormComponent } from './transformer.types.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('TransformerTypesFormComponent', () => {
  let component: TransformerTypesFormComponent;
  let fixture: ComponentFixture<TransformerTypesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ TransformerTypesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformerTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
