import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDirectoryFormComponent } from './account.directory.form.component';

import {imports} from "@test/imports";
describe('AccountDirectoryFormComponent', () => {
  let component: AccountDirectoryFormComponent;
  let fixture: ComponentFixture<AccountDirectoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: imports,
      declarations: [ AccountDirectoryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDirectoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
