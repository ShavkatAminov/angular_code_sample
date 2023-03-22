import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";
import { ConsumerTypeFormComponent } from './consumer.type.form.component';

describe('ConsumerTypeFormComponent', () => {
  let component: ConsumerTypeFormComponent;
  let fixture: ComponentFixture<ConsumerTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedModule,
      ],
      declarations: [ ConsumerTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
