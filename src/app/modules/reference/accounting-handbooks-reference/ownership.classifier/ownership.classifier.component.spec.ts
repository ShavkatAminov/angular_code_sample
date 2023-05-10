import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwnershipClassifierComponent } from './ownership.classifier.component';
import {imports} from "@test/imports";

describe('OwnershipClassifierComponent', () => {
  let component: OwnershipClassifierComponent;
  let fixture: ComponentFixture<OwnershipClassifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: imports,
      declarations: [ OwnershipClassifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnershipClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
