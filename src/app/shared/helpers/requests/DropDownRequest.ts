import {HttpParams} from "@angular/common/http";
import {IRequest} from "../service/http/IRequest";

export class DropDownRequest implements IRequest {

  constructor(protected url: string) {}

  getUri(): string {
    return this.url;
  }

  body: any = {};
  params: HttpParams = new HttpParams();

  setBody(body) {
    this.body = body;
    let newObject = new (this.constructor as new () => this)();
    newObject = Object.assign(newObject, this);
    return newObject;
  }
}
