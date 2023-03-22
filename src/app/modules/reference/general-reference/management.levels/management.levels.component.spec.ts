import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagementLevelsComponent } from './management.levels.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";

describe('ManagementLevelsComponent', () => {
  let component: ManagementLevelsComponent;
  let fixture: ComponentFixture<ManagementLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        TranslocoModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ ManagementLevelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
