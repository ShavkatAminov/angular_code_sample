import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";
import { ConsumerTypeFormComponent } from './consumer.type.form.component';

import {imports} from "@test/imports";
describe('ConsumerTypeFormComponent', () => {
  let component: ConsumerTypeFormComponent;
  let fixture: ComponentFixture<ConsumerTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
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
