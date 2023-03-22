import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsComponent } from './materials.component';
import {SharedModule} from "../../../../shared/shared.module";
import {AppModule} from "../../../../app.module";
import {TranslocoModule} from "@ngneat/transloco";

describe('MaterialsComponent', () => {
  let component: MaterialsComponent;
  let fixture: ComponentFixture<MaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          SharedModule,
          AppModule,
          TranslocoModule,
      ],
      declarations: [ MaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
