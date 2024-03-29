import { ComponentFixture, TestBed } from '@angular/core/testing';
import {imports} from "@test/imports";
import {login} from "@test/login";

describe('#compoentClassNameComponent', () => {
  let component: #compoentClassNameComponent;
  let fixture: ComponentFixture<#compoentClassNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: imports,
      declarations: [ #compoentClassNameComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(#compoentClassNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
