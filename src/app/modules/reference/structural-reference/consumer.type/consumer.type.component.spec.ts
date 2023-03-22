import { ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import { ConsumerTypeComponent } from './consumer.type.component';

describe('ConsumerTypeComponent', () => {
  let component: ConsumerTypeComponent;
  let fixture: ComponentFixture<ConsumerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        TranslocoModule,
        HttpClientModule,
        AppModule,
      ],
      declarations: [ ConsumerTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
