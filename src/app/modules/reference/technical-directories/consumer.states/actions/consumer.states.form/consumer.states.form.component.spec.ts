import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerStatesFormComponent } from './consumer.states.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";


describe('ConsumerStatesFormComponent', () => {
  let component: ConsumerStatesFormComponent;
  let fixture: ComponentFixture<ConsumerStatesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ ConsumerStatesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerStatesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
