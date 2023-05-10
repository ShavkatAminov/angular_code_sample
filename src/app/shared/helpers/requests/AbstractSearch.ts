import {HttpParams} from "@angular/common/http";
import {IRequest} from "../service/http/IRequest";
import {SortModelItem} from "ag-grid-community/dist/lib/sortController";

export class AbstractSearch implements IRequest {
  getUri(): string {
    return this.url;
  };
  params: HttpParams = new HttpParams();
  body = {
    pageable: new Pageable(),
  };

  constructor(protected url: string, body = {}) {
    this.url = this.url + '/filter';

    this.body = {...this.body, ...body}
  }

  setFilterProperties(filter, previousParams) {
    Object.keys(this.body).forEach(key => {
      if(previousParams.hasOwnProperty(key)) {
        delete this.body[key];
      }
    });
    this.body = {...this.body, ...filter};
  }

  setSortParams(sortData: SortModelItem) {
    this.body.pageable.sort = [sortData.colId];
    this.body.pageable.direction = sortData.sort.toUpperCase();
  }

  clearSort() {
    this.body.pageable.sort = ['id'];
    this.body.pageable.direction = "ASC";
  }
}

export class Pageable {
  index: number = 0;
  size: number = 20;
  sort: string[] = ["id"];
  direction: string = "ASC";
}
