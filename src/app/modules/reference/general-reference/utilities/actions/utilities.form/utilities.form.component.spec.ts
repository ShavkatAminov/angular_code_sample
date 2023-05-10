import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UtilitiesFormComponent } from "./utilities.form.component";
import { By } from "@angular/platform-browser";
import {imports} from "@test/imports";

describe("UtilitiesFormComponent", () => {
  let component: UtilitiesFormComponent;
  let fixture: ComponentFixture<UtilitiesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: imports,
      declarations: [UtilitiesFormComponent],
      teardown: {destroyAfterEach: false},
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a form with form controls", () => {
    expect(component.form.get("nameUz")).toBeTruthy();
    expect(component.form.get("status")).toBeTruthy();
  });

  it("should call the saveProcess method on form submission", () => {
    spyOn(component, "saveProcess");
    component.form.controls["nameUz"].setValue("test");
    component.form.controls["status"].setValue(true);
    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css("form"));
    form.triggerEventHandler("ngSubmit", null);
    expect(component.saveProcess).toHaveBeenCalled();
  });

  it("should call the beforeSave method before save", () => {
    spyOn(component, "beforeSave");
    component.saveProcess();
    expect(component.beforeSave).toHaveBeenCalled();
  });
});
