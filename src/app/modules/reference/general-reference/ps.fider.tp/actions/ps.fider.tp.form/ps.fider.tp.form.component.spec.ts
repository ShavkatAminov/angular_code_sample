import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsFiderTpFormComponent } from './ps.fider.tp.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('PsFiderTpFormComponent', () => {
  let component: PsFiderTpFormComponent;
  let fixture: ComponentFixture<PsFiderTpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ PsFiderTpFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsFiderTpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
