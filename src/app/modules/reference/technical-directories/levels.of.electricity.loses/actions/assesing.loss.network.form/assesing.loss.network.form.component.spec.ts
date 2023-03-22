import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesingLossNetworkFormComponent } from './assesing.loss.network.form.component';
import {AppModule} from "../../../../../../app.module";
import {SharedModule} from "@shared/shared.module";

describe('AssesingLossNetworkFormComponent', () => {
  let component: AssesingLossNetworkFormComponent;
  let fixture: ComponentFixture<AssesingLossNetworkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          AppModule,
          SharedModule,
      ],
      declarations: [ AssesingLossNetworkFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssesingLossNetworkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
