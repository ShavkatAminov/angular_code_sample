import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDirectoryFormComponent } from './account.directory.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('AccountDirectoryFormComponent', () => {
  let component: AccountDirectoryFormComponent;
  let fixture: ComponentFixture<AccountDirectoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
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
