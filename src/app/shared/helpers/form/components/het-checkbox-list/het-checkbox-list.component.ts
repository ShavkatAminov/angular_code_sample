import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {BasicFormInput} from "../../basic/basic.form.input";
import {Options, OptionsCheckbox} from "../../interfaces/options";
import { NG_VALUE_ACCESSOR} from "@angular/forms";
import {IRequest} from "../../../service/http/IRequest";
import {HttpClientService} from "../../../service/http/http.client.service";

@Component({
  selector: 'het-checkbox-list',
  templateUrl: './het-checkbox-list.component.html',
  styleUrls: ['./het-checkbox-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HetCheckboxListComponent),
      multi: true
    }
  ]
})
export class HetCheckboxListComponent extends BasicFormInput {
  suggestions: OptionsCheckbox[] = [];
  selectedItems: any;
  loaded = false;
  private _request: IRequest;
  @Input() set request(val: IRequest) {
    if(this._request) {
      this._request = val;
      this.getSuggestions();
    }
    else
      this._request = val;
  };
  get request() :IRequest {
    return this._request;
  }
  @Output() selectChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private http: HttpClientService) {
    super();
  }
  ngOnInit() {
    this.getSuggestions();
  }
  getSuggestions() {
    this.http.request(this.request,'post').subscribe((data: Options[]) => {
      this.suggestions = data.map(item => {
        return {...item, checked: false};
      });
      this.loaded = true;
      if(this.selectedItems) {
        this.writeValue(this.selectedItems);
      }
    });
  }
  toNull() {
    this.value = null;
    this.onChange(null);
    this.selectChanged.emit(null);
  }
  onValueChange() {
    this.value = this.suggestions.filter(item => item.checked === true).map(item => {
      return item.id
    })
    this.onChange(this.value);
    this.selectChanged.emit(this.value);
  }
  override writeValue(obj: any) {
    this.selectedItems = obj;
    if(obj) {
      this.value = obj;
      if(this.loaded) {
        this.suggestions.filter(item => this.selectedItems.includes(item.id))
            .forEach(item => {
                item.checked = true;
            })
      }
    }
    else {
      this.toNull();
    }
  }

  displayFunction(suggestion){
    if (suggestion) {
      if (suggestion.code && suggestion.name) {
        return  suggestion.name
      } else {
        if (suggestion.code) {
          return suggestion.code;
        }
        return suggestion.name;
      }
    }
  }
}
