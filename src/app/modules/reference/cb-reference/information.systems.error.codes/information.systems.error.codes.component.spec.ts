import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationSystemsErrorCodesComponent } from './information.systems.error.codes.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "@shared/shared.module";
import {AppModule} from "../../../../app.module";


describe('InformationSystemsErrorCodesComponent', () => {
  let component: InformationSystemsErrorCodesComponent;
  let fixture: ComponentFixture<InformationSystemsErrorCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ InformationSystemsErrorCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationSystemsErrorCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
