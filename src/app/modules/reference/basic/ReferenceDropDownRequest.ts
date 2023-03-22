import {DropDownRequest} from "@shared/helpers/requests/DropDownRequest";

export class ReferenceDropDownRequest extends DropDownRequest {

  constructor(protected urlReference: string) {
    super('reference/v1/' + urlReference + '/dropdown');
  }
}

export class RegistersDropDownRequest extends DropDownRequest {

  constructor(protected urlReference: string) {
    super('registers/v1/' + urlReference + '/dropdown');
  }
}
