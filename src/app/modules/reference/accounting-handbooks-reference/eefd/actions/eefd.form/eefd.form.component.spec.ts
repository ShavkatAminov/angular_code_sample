import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'app/app.module';

import { EefdFormComponent } from './eefd.form.component';
import {SharedModule} from "../../../../../../shared/shared.module";

describe('EefdFormComponent', () => {
  let component: EefdFormComponent;
  let fixture: ComponentFixture<EefdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ EefdFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EefdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
