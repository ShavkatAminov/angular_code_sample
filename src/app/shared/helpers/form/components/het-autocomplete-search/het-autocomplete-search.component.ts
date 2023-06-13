import {Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {HttpClientService} from "../../../service/http/http.client.service";
import {debounceTime, Observable} from "rxjs";
import {Options} from "../../interfaces/options"
import {HetAutocompleteComponent} from "@shared/helpers/form/components/het-autocomplete/het-autocomplete.component";

@Component({
  selector: 'het-autocomplete-search',
  templateUrl: '/../het-autocomplete/het-autocomplete.component.html',
  styleUrls: ['/../het-autocomplete/het-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HetAutocompleteSearchComponent),
      multi: true
    }
  ],

})
export class HetAutocompleteSearchComponent extends HetAutocompleteComponent {

  constructor(protected http: HttpClientService) {
    super(http);
  }
  ngOnInit() {
    this.showOnlyName = true;
    this.control.valueChanges.pipe(debounceTime(1000))
        .subscribe(res => {
          this.load(res);
        });
  }

  override loadAndCreate() {
    if(this.suggestions.length === 0)
      this.load(this.control.value);
  }

  load(search) {
    this.edit = true;
    let filterValue ='';
    if(search) {
      if (typeof(search) == "string"){
        filterValue = search.toLowerCase();
      }
      else{
        filterValue = this.CodeAndName(search).toLowerCase();
      }
    }
    this.request.body = {...this.request.body, fullName: filterValue};
    this.http.request(this.request,'post').subscribe((data: any) => {
      this.suggestions = data['content'] || data;
      if(this.showOnlyName) {
        this.suggestions.forEach((item) => {
          item.code = null;
        });
      }

      if(this.suggestions && !this.value) {
          this.writeValue(this.selectedItem);
      }

      this.filteredSuggestions = new Observable<Options[]>(ob => {ob.next(this.suggestions)});
    });
  }
}
