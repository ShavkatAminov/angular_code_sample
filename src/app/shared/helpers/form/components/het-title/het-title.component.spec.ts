import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HetTitleComponent } from './het-title.component';
import {AppModule} from "../../../../../app.module";

describe('HetTitleComponent', () => {
  let component: HetTitleComponent;
  let fixture: ComponentFixture<HetTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
      ],
      declarations: [ HetTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
