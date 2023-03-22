import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOfficesComponent } from './post.offices.component';
import {AppModule} from "../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('PostOfficeDirectoryComponent', () => {
  let component: PostOfficesComponent;
  let fixture: ComponentFixture<PostOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ PostOfficesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
