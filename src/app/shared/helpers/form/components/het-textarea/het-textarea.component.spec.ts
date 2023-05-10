import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { HetTextareaComponent } from './het-textarea.component';



import {imports} from "@test/imports";
describe('HetTextareaComponent', () => {
  let component: HetTextareaComponent;
  let fixture: ComponentFixture<HetTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: imports,
      declarations: [ HetTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as disabled`, () => {
    const fixture = TestBed.createComponent(HetTextareaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.disabled).toEqual(false);
  });
  it(`should have as showError`, () => {
    const fixture = TestBed.createComponent(HetTextareaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.showError).toEqual(false);
  });
  it('should TextareaChanged emit on change', waitForAsync(() => {
    spyOn(component.textareaChange, 'emit');
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const matTextarea = nativeElement.querySelector('textarea');
    matTextarea.value = 'test';
    matTextarea.dispatchEvent(new Event('input'));
    matTextarea.dispatchEvent(new Event('change'));
    expect(component.textareaChange.emit).toHaveBeenCalledWith('test');
  }));

  it('should not TextareaChanged emit on change', waitForAsync(() => {
    component.disabled = true;
    spyOn(component.textareaChange, 'emit');
    const nativeElement = fixture.nativeElement;
    const matTextarea = nativeElement.querySelector('textarea');
    matTextarea.value = 'test';
    matTextarea.dispatchEvent(new Event('input'));
    matTextarea.dispatchEvent(new Event('change'));
    expect(component.textareaChange.emit).not.toHaveBeenCalledWith();
  }));
});
