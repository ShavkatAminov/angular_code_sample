import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppModule } from "app/app.module";
import { SharedModule } from "app/shared/shared.module";
import { TranslocoModule } from "@ngneat/transloco";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { By } from "@angular/platform-browser";
import { AgGridModule } from "ag-grid-angular";
import { BanksComponent } from './banks.component';
import {BanksFormComponent} from "./actions/banks.form/banks.form.component";
import {FormModalComponent} from "../../../../shared/helpers/form.modal/form.modal.component";

import {login} from "@test/login";
describe('BanksDirectoryComponent', () => {
  let component: BanksComponent;
  let fixture: ComponentFixture<BanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanksComponent, BanksFormComponent ],
      imports: [
        HttpClientTestingModule,
        AgGridModule,
        AppModule,
        SharedModule,
        TranslocoModule,
      ],
      providers: [FormModalComponent],
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(BanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a grid with column definitions", () => {
    const grid = fixture.debugElement.query(By.css("ag-grid-angular"));
    expect(grid).toBeTruthy();
    expect(component.columnDefs.length).toBeGreaterThan(0);
  });

  it("should have a title", () => {
    expect(component.title).toBeDefined();
  });

  it("should have a request", () => {
    expect(component.request).toBeDefined();
  });

  it("should have a addUpdate method", () => {
    expect(component.addUpdate).toBeDefined();
  });

  it("should open modal when addUpdate method is called", () => {
    spyOn(FormModalComponent, "showModal").and.callThrough();
    component.addUpdate();
    expect(FormModalComponent.showModal).toHaveBeenCalled();
  });
});
