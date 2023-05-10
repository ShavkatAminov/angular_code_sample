import {DropDownRequest} from "@shared/helpers/requests/DropDownRequest";

export class ReferenceDropDownRequest extends DropDownRequest {

  constructor(protected urlReference: string, body: object = {}) {
    super('reference/v1/' + urlReference + '/dropdown', body);
  }
}
