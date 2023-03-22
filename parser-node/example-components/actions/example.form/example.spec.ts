import { ComponentFixture, TestBed } from '@angular/core/testing';

import { #compoentClassNameFormComponent } from './#fileName.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('#compoentClassNameFormComponent', () => {
  let component: #compoentClassNameFormComponent;
  let fixture: ComponentFixture<#compoentClassNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ #compoentClassNameFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(#compoentClassNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
