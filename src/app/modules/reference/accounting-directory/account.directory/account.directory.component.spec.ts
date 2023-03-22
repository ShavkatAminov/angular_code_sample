import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDirectoryComponent } from './account.directory.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('AccountDirectoryComponent', () => {
  let component: AccountDirectoryComponent;
  let fixture: ComponentFixture<AccountDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ AccountDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
