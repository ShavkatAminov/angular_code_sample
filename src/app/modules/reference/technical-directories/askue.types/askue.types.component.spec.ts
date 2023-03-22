import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AskueTypesComponent } from './askue.types.component';
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";
import {TranslocoModule} from "@ngneat/transloco";

describe('AskueTypesComponent', () => {
  let component: AskueTypesComponent;
  let fixture: ComponentFixture<AskueTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          SharedModule,
          AppModule,
          TranslocoModule,
      ],
      declarations: [ AskueTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskueTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
