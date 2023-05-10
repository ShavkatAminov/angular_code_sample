import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { DatatableComponent } from './datatable.component';
import {HttpClientService} from "../../service/http/http.client.service";
import {AppModule} from "../../../../app.module";

import {login} from "@test/login";
describe('DatatableComponent', () => {
  let component: DatatableComponent;
  let fixture: ComponentFixture<DatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ DatatableComponent ],
    })
    .compileComponents();
    login();

    fixture = TestBed.createComponent(DatatableComponent);
    component = fixture.componentInstance;
    component.columnDefs = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.dataSource).toBeUndefined();
    expect(component.gridApi).toBeUndefined();

  });
  it('call reload', () => {
    component.reloadGrid();
    expect(component.dataSource).toBeDefined();
  });
  it('on grid ready emit', waitForAsync(() => {
    component.gridReady.subscribe(res => {
      expect(res).toBeTrue();
      expect(component.gridApi).toBeDefined();
    })
  }));
});
