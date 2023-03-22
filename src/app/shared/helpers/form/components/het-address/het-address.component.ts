import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BasicFormInput} from "../../basic/basic.form.input";
import {ReferenceDropDownRequest} from "../../../../../modules/reference/basic/ReferenceDropDownRequest";
import {ReferenceApiUrls} from "../../../../../modules/reference/referenceApiUrls";
import {debounceTime} from "rxjs";

@Component({
  selector: 'het-address',
  templateUrl: './het-address.component.html',
  styleUrls: ['./het-address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HetAddressComponent),
      multi: true
    }
  ],

})
export class HetAddressComponent extends BasicFormInput implements OnInit {
  @Input() form: FormGroup = new FormGroup({});
  @Output() formChange: EventEmitter<any> = new EventEmitter<any>();
  habitationDivisionsRequest = new ReferenceDropDownRequest(ReferenceApiUrls.HABITATION_DIVISIONS);
  streetsRequest = new ReferenceDropDownRequest(ReferenceApiUrls.STREETS_DIRECTORY);
  constructor() {
    super();
    this.form.addControl('streetId', new FormControl());
    this.form.addControl('buildingNumber', new FormControl());
    this.form.addControl('flatNumber', new FormControl());
    this.form.addControl('corpusNumber', new FormControl());
    this.form.addControl('habitationDivisionId', new FormControl());
  }
  ngOnInit() {
    this.form.valueChanges.pipe(debounceTime(500)).subscribe(res => {
      this.onValueChange(res);
    });
    this.form.get('habitationDivisionId')?.valueChanges.pipe().subscribe(res => {
      this.streetsRequest.body["habitationDivisionsId"] = res;
    })
  }
  onValueChange(res) {
    this.onChange(res);
    this.formChange.emit(res);
  }
  override writeValue(obj: any) {
    this.form.patchValue(obj);
  }
}
