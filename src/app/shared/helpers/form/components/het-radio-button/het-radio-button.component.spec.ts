import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { HetRadioButtonComponent } from './het-radio-button.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgApexchartsModule} from "ng-apexcharts";
import {SharedModule} from "../../../../shared.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('HetRadioButtonComponent', () => {
  let component: HetRadioButtonComponent;
  let fixture: ComponentFixture<HetRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonToggleModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        NgApexchartsModule,
        SharedModule,
        RouterTestingModule,
      ],
      declarations: [ HetRadioButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetRadioButtonComponent);
    component = fixture.componentInstance;
    component.options = [
      {id: 1, name: 'apple'},
      {id: 2, name: 'apple'},
      {id: 3, name: 'apple'},
      {id: 4, name: 'apple'},
      {id: 5, name: 'apple'},
      {id: 6, name: 'apple'},
    ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on change', waitForAsync(() => {
    spyOn(component.selectionChanged, 'emit');

    const nativeElement = fixture.nativeElement;
    const matRadio = nativeElement.querySelector('input[type=radio]');
    matRadio.checked = true;

    matRadio.dispatchEvent(new Event('change'));


    expect(component.selectionChanged.emit).toHaveBeenCalledWith(1);
  }));
  it('should not emit on change', waitForAsync(() => {
    component.disabled = true;
    spyOn(component.selectionChanged, 'emit');
    const nativeElement = fixture.nativeElement;
    const matRadio = nativeElement.querySelector('input[type=radio]');
    matRadio.checked = true;
    matRadio.dispatchEvent(new Event('change'));
    expect(component.selectionChanged.emit).not.toHaveBeenCalledWith(2);
  }));
});
