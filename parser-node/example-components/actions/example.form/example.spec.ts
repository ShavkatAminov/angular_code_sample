import { ComponentFixture, TestBed } from '@angular/core/testing';

import { #compoentClassNameFormComponent } from './#fileName.form.component';
import {imports} from "@test/imports";
import { login } from '@test/login';
describe('#compoentClassNameFormComponent', () => {
  let component: #compoentClassNameFormComponent;
  let fixture: ComponentFixture<#compoentClassNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: imports,
      declarations: [ #compoentClassNameFormComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(#compoentClassNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
