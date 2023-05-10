import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UtilitiesComponent } from "./utilities.component";
import { By } from "@angular/platform-browser";
import {FormModalComponent} from "@shared/helpers/form.modal/form.modal.component";
import {imports} from "@test/imports";

describe("UtilitiesComponent", () => {
  let component: UtilitiesComponent;
  let fixture: ComponentFixture<UtilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilitiesComponent],
      imports: imports,
      providers: [FormModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesComponent);
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
