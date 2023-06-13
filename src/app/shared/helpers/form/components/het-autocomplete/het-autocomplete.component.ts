import {Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {IRequest} from "../../../service/http/IRequest";
import {BasicFormInput} from "../../basic/basic.form.input";
import {HttpClientService} from "../../../service/http/http.client.service";
import {map, Observable, startWith} from "rxjs";
import {Options} from "../../interfaces/options"
import {MatAutocompleteTrigger} from "@angular/material/autocomplete";

@Component({
  selector: 'het-autocomplete',
  templateUrl: './het-autocomplete.component.html',
  styleUrls: ['./het-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HetAutocompleteComponent),
      multi: true
    }
  ],

})
export class HetAutocompleteComponent extends BasicFormInput implements OnInit {
  suggestions: Options[] = [];
  filteredSuggestions: Observable<Options[]> = new Observable<Options[]>();
  control = new FormControl();
  selectedItem : number;
  test = 123123;
  edit:boolean = false;
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

  readonlyWhenSelectedItem = false;

  @Input() placeholder: string = '';
  @Input() showOnlyName = false;
  @Input() allowNameDisplay:boolean= false;
  @Output() selectChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() autoCompleteChange:EventEmitter<any> = new EventEmitter();

  constructor(protected http: HttpClientService) {
    super();
  }
  ngOnInit() {
    this.filteredSuggestions = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
    );
  }
  override setDisabledState(disabled: boolean): void {
    if(disabled) {
      this.control.disable();
    }
    else {
      this.control.enable();
    }
    this.disabled = disabled;
  }

  getSuggestions() {
    this.edit = true;
    if(this.request) {
      this.http.request(this.request, 'post').subscribe((data: Options[]) => {
        this.suggestions = data;
        this.control.setValue("");
        if (this.selectedItem) {
          this.writeValue(this.selectedItem);
        }
      });
    }
  }
  toNull(outputEmit = true){
      this.readonlyWhenSelectedItem = false;
      this.value = null;
      if(outputEmit) {
        this.onChange(null);
        this.autoCompleteChange.emit(null)
        this.selectChanged.emit(null);
      }
      this.selectedItem = null;
  }
  onValueChange(event: any) {
    this.autoCompleteChange.emit(event.option.value)
    this.selectedItem = event.option.value.id;
    this.onChange(this.selectedItem);
    this.selectChanged.emit(this.selectedItem);
    setTimeout(() => {
      super.onKeyDownEnter();
      this.readonlyWhenSelectedItem = true;
    }, 100);
  }

  closeAfterFocusOut() {
    setTimeout(() => {
      if(this.autoTrigger) {
        this.autoTrigger.closePanel();
      }
    }, 500);
  }

  @ViewChild('autoTrigger') autoTrigger: MatAutocompleteTrigger;

  override writeValue(obj: any, readonly = true) {
    this.selectedItem = obj;
    if(obj){
      this.loadAndCreate();
      this.value = this.suggestions.find(suggestion => suggestion.id == this.selectedItem);
      if(this.value) {
        this.readonlyWhenSelectedItem = readonly;
      }
    }
    else {
      this.toNull(false);
    }
  }

  override onKeyDownEnter() {
    if(this.control.value) {
      let options: Options[] = this._filter(this.control.value);
      if(options && options.length == 1) {
        this.writeValue(options[0].id, false);
        this.onValueChange({option: {value: options[0]}});
        return ;
      }
    }
      super.onKeyDownEnter();
  }

  loadAndCreate(){
    if(this.edit === false) {
      this.getSuggestions()
    }
  }
  displayFunction(suggestion){
    if (suggestion) {
      if (suggestion.code && suggestion.name) {
        return suggestion.code + " - " + suggestion.name
      } else {
        if (suggestion.code) {
          return suggestion[suggestion.code];
        }
        return suggestion.name;
      }
    }
  }
  displayNameFunction(suggestion){
    if (suggestion) {
        return suggestion.name;
    }
  }

  CodeAndName(suggestion){
    if (suggestion) {
      if (suggestion.code && suggestion.name) {
        return suggestion.code.toString().concat(" - ", suggestion.name);
      } else {
        if (suggestion.code) {
          return suggestion.code;
        }
        return suggestion.name;
      }
    }
  }

  private _filter(value: string | Options): Options[] {
    let filterValue ='';
    if (typeof(value) == "string"){
      filterValue = value.toLowerCase();
    }
    else{
      filterValue = this.CodeAndName(value).toLowerCase();
    }
    return  this.suggestions.filter(suggestion => this.CodeAndName(suggestion).toLowerCase().includes(filterValue));
  }

}
