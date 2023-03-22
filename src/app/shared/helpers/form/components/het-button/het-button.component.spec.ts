import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { HetButtonComponent } from './het-button.component';
import { MatButtonModule } from "@angular/material/button";
import {AppModule} from "../../../../../app.module";
import {SharedModule} from "../../../../shared.module";
import {TranslocoModule} from "@ngneat/transloco";


describe('HetButtonComponent', () => {
  let component: HetButtonComponent;
  let fixture: ComponentFixture<HetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedModule,
        TranslocoModule,
        MatButtonModule,
      ],
      declarations: [ HetButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    spyOn(component.btnClick, 'emit');

    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.btnClick.emit).toHaveBeenCalledWith();
  });
  it('should not emit on click on disabled', waitForAsync(() => {

    component.disabled = true;
    spyOn(component.btnClick, 'emit');
    const nativeElement = fixture.nativeElement;
    nativeElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.btnClick.emit).not.toHaveBeenCalledWith();
  }));
});
