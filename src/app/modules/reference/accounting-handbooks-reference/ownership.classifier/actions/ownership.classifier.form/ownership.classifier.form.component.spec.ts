import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnershipClassifierFormComponent } from './ownership.classifier.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('OwnershipClassifierFormComponent', () => {
  let component: OwnershipClassifierFormComponent;
  let fixture: ComponentFixture<OwnershipClassifierFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ OwnershipClassifierFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnershipClassifierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
