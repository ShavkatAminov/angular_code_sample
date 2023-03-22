import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOfficeDirectoryFormComponent } from './post.office.directory.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "../../../../../../shared/shared.module";

describe('PostOfficeDirectoryFormComponent', () => {
  let component: PostOfficeDirectoryFormComponent;
  let fixture: ComponentFixture<PostOfficeDirectoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, SharedModule],
      declarations: [ PostOfficeDirectoryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostOfficeDirectoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
