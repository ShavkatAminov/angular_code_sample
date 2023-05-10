import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";
import {BooksComponent} from "./books.component";

import {imports} from "@test/imports";
import {login} from "@test/login";
describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ BooksComponent ]
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
