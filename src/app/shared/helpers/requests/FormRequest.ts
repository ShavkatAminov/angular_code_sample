import {HttpParams} from "@angular/common/http";
import {IRequest} from "../service/http/IRequest";

export class FormRequest implements IRequest {

  constructor(protected url: string) {}

  id = null;
  getUri(): string {
    return this.url + (this.id ? "/" + this.id : '');
  }

  body: any;
  params: HttpParams = new HttpParams();
}
