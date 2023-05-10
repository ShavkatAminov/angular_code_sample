import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HetModalAutocompleteComponent} from './het-modal-autocomplete.component';
import {AppModule} from "../../../../../app.module";
import {SharedModule} from "../../../../shared.module";
import {ReferenceListRequest} from "../../../../../modules/reference/basic/ReferenceListRequest";
import {ReferenceApiUrls} from "../../../../../modules/reference/referenceApiUrls";
import {HttpClientService} from "../../../service/http/http.client.service";

import {login} from "@test/login";
describe('HetModalAutocompleteComponent', () => {
  let component: HetModalAutocompleteComponent;
  let fixture: ComponentFixture<HetModalAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HetModalAutocompleteComponent],
      imports: [
          HttpClientTestingModule,
          AppModule,
          SharedModule,
      ],
      providers: [HttpClientService]
    }).compileComponents();
    login();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HetModalAutocompleteComponent);
    component = fixture.componentInstance;
    component.opts = {
      columns: [
        {
          field: 'code',
          headerName: 'code',
          isPrimary: true,
          isFilter: true,
          type: 'input'
        },
        {
          field: 'nameUz',
          headerName: 'nameUz',
          isFilter: true,
          type: 'input',
          isPrimary: false,
        }
      ],
      request: new ReferenceListRequest(ReferenceApiUrls.BANKS),
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
