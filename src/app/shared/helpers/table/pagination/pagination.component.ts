import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OptionsObj} from "../../form/interfaces/options";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: '[het-pagination]',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() showFilter = true;
  ngOnInit(): void {
    this.paginationForm.valueChanges.subscribe(res => {
      res['index'] = res['page'] - 1;
      delete res.page;
      this.changeEvent.emit(res);
    })
  }
  paginationSelectOptions: OptionsObj[] = [
    {id: 10, name: '10'},
    {id: 20, name: '20'},
    {id: 30, name: '30'},
    {id: 40, name: '40'},
    {id: 50, name: '50'},
  ]

  @Output() changeEvent = new EventEmitter();
  @Output() filterBtnClicked = new EventEmitter();

  paginationForm = new FormGroup({
    size: new FormControl(20, []),
    page: new FormControl(1, []),
  });

  addToPage(value) {
    this.setValue(this.paginationForm.get('page')?.value + value);
  }

  setValue(value) {
    this.paginationForm.patchValue({
      page: value,
    })
  }
  totalPages = 1;
}
