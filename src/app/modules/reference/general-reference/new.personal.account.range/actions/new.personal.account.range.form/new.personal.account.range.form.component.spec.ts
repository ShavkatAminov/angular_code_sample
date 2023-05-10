import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPersonalAccountRangeFormComponent } from './new.personal.account.range.form.component';
import {AppModule} from "@app/app.module";
import {SharedModule} from "@shared/shared.module";

import {imports} from "@test/imports";
describe('NewPersonalAccountRangeFormComponent', () => {
  let component: NewPersonalAccountRangeFormComponent;
  let fixture: ComponentFixture<NewPersonalAccountRangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ NewPersonalAccountRangeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPersonalAccountRangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
