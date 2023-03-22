import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StreetsDirectoryComponent } from './streets.directory.component';
import {TranslocoModule} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('StreetsDirectoryComponent', () => {
  let component: StreetsDirectoryComponent;
  let fixture: ComponentFixture<StreetsDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        TranslocoModule,
        AppModule,
      ],
      declarations: [ StreetsDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetsDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
