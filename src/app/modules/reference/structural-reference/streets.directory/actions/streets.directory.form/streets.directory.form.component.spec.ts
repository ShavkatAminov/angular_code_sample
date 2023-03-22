import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StreetsDirectoryFormComponent } from './streets.directory.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('StreetsDirectoryFormComponent', () => {
  let component: StreetsDirectoryFormComponent;
  let fixture: ComponentFixture<StreetsDirectoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ StreetsDirectoryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetsDirectoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
